const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String

},{timestamps:true});

const userdb = new mongoose.model("nexus",UserSchema);

module.exports = userdb;