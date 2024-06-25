const User = require('../models/User');

const appealController = {
  createAppeal: async (req, res) => {
    try {
      const { userId, reason } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.appeals.push({ reason });
      await user.save();

      res.status(200).json({ message: 'Appeal created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAppeals: async (req, res) => {
    try {
      const appeals = await User.find({}, 'appeals');

      res.status(200).json(appeals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  resolveAppeal: async (req, res) => {
    try {
      const { userId, appealId } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const appeal = user.appeals.id(appealId);

      if (!appeal) {
        return res.status(404).json({ message: 'Appeal not found' });
      }

      // Logic to resolve the appeal

      await user.save();

      res.status(200).json({ message: 'Appeal resolved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = appealController;