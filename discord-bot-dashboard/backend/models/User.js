const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  currency: {
    type: Number,
    default: 0
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  serverBumps: {
    type: Number,
    default: 0
  },
  warnings: {
    type: Number,
    default: 0
  },
  bans: {
    type: Number,
    default: 0
  },
  achievements: [{
    type: String
  }],
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;