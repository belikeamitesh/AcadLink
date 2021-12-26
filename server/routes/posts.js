const express = require('express');

const {
  getAllPosts,
  getPostById,
  createNewPost,
  deletePost,
} = require('../controllers/posts');

const auth = require('../middlewares/auth');

const router = express.Router();

router.route('/').get(getAllPosts).post(auth, createNewPost);

router.route('/:id').get(getPostById).delete(auth, deletePost);

module.exports = router;
