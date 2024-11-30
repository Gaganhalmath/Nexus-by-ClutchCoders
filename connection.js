const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.Database;

mongoose.connect(DB,{
  useUnifiedTopology:true,
  useNewUrlParser:true
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Error connecting to database:", err));