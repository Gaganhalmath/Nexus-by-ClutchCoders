const socket = io();

document.getElementById("join").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  if (username) {
    socket.emit("join", username);
  }
});

document.getElementById("send").addEventListener("click", () => {
  const recipient = document.getElementById("recipient").value;
  const message = document.getElementById("message").value;

  if (recipient && message) {
    socket.emit("private-message", { to: recipient, message });
  }
});

socket.on("private-message", ({ from, message }) => {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<p><strong>${from}:</strong> ${message}</p>`;
});

socket.on("user-list", (users) => {
  console.log("Active users:", users);
});
