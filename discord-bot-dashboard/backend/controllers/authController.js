const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        password: hashedPassword
      });

      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '7d' });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  logout: async (req, res) => {
    try {
      res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = authController;