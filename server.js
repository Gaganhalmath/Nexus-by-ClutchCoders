require("dotenv").config();
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const User = require("./models/User");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware to serve static files
app.use(express.static("public"));

// MongoDB Cloud Connection
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully (Cloud)");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Store active users in memory
const activeUsers = {};

// WebSocket connections
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // User joins chat
  socket.on("join", async (username) => {
    try {
      let user = await User.findOne({ username });
      if (!user) {
        user = await User.create({ username });
      }

      activeUsers[username] = socket.id;
      console.log(`${username} joined the chat.`);

      // Notify all clients
      io.emit("user-list", Object.keys(activeUsers));
    } catch (err) {
      console.error("Error during join:", err);
      socket.emit("error", "An error occurred during login");
    }
  });

  // Handle private messaging
  socket.on("private-message", async ({ to, message }) => {
    const sender = Object.keys(activeUsers).find(
      (key) => activeUsers[key] === socket.id
    );

    if (!sender) {
      socket.emit("error", "You are not logged in");
      return;
    }

    const recipientSocket = activeUsers[to];
    if (recipientSocket) {
      io.to(recipientSocket).emit("private-message", {
        from: sender,
        message,
      });

      // Save message to database
      await Message.create({
        sender,
        recipient: to,
        message,
      });

      socket.emit("notification", `Message sent to ${to}`);
    } else {
      socket.emit("error", `${to} is not online`);
    }
  });

  // User disconnects
  socket.on("disconnect", () => {
    const disconnectedUser = Object.keys(activeUsers).find(
      (key) => activeUsers[key] === socket.id
    );

    if (disconnectedUser) {
      delete activeUsers[disconnectedUser];
      io.emit("user-list", Object.keys(activeUsers));
      console.log(`${disconnectedUser} disconnected`);
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
