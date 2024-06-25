const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/User');

router.post('/vote', async (req, res) => {
  try {
    const { userId, serverId } = req.body;

    // Check if the user has already voted
    const user = await User.findOne({ userId });
    if (user.votedServers.includes(serverId)) {
      return res.status(400).json({ message: 'User has already voted for this server' });
    }

    // Simulate voting process
    // Call Discord API to register the vote
    const response = await axios.post(`https://discord.com/api/servers/${serverId}/vote`, {
      userId,
      serverId,
    });

    // Update user's votedServers list
    user.votedServers.push(serverId);
    await user.save();

    return res.status(200).json({ message: 'Vote registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;