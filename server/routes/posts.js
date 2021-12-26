const express = require('express');
const multer = require('multer');

const Post = require('./../models/post.model');

const fsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now().toString() + file.originalname);
  },
});

const {
  getAllPosts,
  getPostById,
  createNewPost,
  deletePost,
} = require('../controllers/posts');

const auth = require('../middlewares/auth');
const User = require('../models/user.model');

const router = express.Router();
router.get('/filters', async (req, res) => {
  const univList = await User.find().select('university branch');
  const toSend = {
    univs: [],
    branches: [],
  };
  for (const univ of univList) {
    toSend.univs.push(univ.university);
    toSend.branches.push(univ.branch);
  }
  return res.json(toSend);
});

router.get('/filter', async (req, res) => {
  const search = req.query.search;
  const posts = await Post.find({
    $or: [
      {
        univ: search,
      },
      {
        branch: search,
      },
    ],
  }).populate('author');
  return res.json(posts);
});

router
  .route('/')
  .get(getAllPosts)
  .post(
    auth,
    multer({
      storage: fsStorage,
    }).single('postpic'),
    createNewPost
  );

router.route('/:id').get(getPostById).delete(auth, deletePost);

module.exports = router;
