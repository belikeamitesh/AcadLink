const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    achievement: {
      type: String,
      required: true,
    },
    exp: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    postpic: {
      type: String,
      // required: true,
    },
    univ: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
