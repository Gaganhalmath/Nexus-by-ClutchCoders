const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    avatar: String,
    interests: [String],
    skills: [String],
    experience: String,
    communities: [String],
});

module.exports = mongoose.model('Profile',ProfileSchema);