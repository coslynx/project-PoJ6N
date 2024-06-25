const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

// Bump route
router.post('/bump', async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Make API call to Discord for server bumping
    const response = await axios.post('discord-api-url/bump', {
      serverId: user.serverId,
      userId: user.discordId,
    });

    // Handle response from Discord API
    if (response.data.success) {
      return res.status(200).json({ message: 'Server bumped successfully' });
    } else {
      return res.status(400).json({ message: 'Failed to bump server' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;