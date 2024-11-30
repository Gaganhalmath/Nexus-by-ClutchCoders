const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// Get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new profile
router.post('/', async (req, res) => {
  const profile = new Profile({
    avatar: req.body.avatar,
    interests: req.body.interests,
    skills: req.body.skills,
    experience: req.body.experience,
    communities: req.body.communities,
  });
  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
