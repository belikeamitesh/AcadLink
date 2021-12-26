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

const router = express.Router();

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

router.get('/filter', async (req, res) => {
  const query = req.query.univ;
  console.log(query);
  const univList = await Post.find({ university: query }).populate('author');
  return res.json(univList);
});

module.exports = router;
