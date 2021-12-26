const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  university: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
    default: '/public/images/none.png',
  },
  posts: {
    type: [String],
    ref: 'Post',
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);
