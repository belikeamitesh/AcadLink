const express = require('express');
const multer = require('multer');

const auth = require('./../middlewares/auth');

const User = require('./../models/user.model');

const crypto = require('crypto');

const fsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now().toString() + file.originalname);
  },
});

const { createUser, login, uploadImage } = require('../controllers/user');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', login);
router.post(
  '/upload',
  auth,
  multer({
    storage: fsStorage,
  }).single('profile'),
  uploadImage
);

router.get('/user', auth, async (req, res) => {
  try {
    console.log(req.user);
    return res.json(req.user);
  } catch (error) {}
});

module.exports = router;
