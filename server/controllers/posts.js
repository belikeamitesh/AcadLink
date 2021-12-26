const Post = require('./../models/post.model');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate(
      'author',
      'name email university branch profile'
    );
    return res.status(200).json(posts);
  } catch (error) {
    const err = new Error('Failed to fetch');
    err.statusCode = 500;
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate(
      'author',
      'name email university branch profile'
    );
    return res.status(200).json({
      post,
    });
  } catch (error) {
    const err = new Error('Post with given ID not found');
    err.statusCode = 404;
    next(err);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    const { achievement, exp, status } = req.body;
    const newPost = await Post.create({
      achievement,
      exp,
      status,
      // postpic: '/public/' + req.file.path,
      author: req.user._id,
      univ: req.user.university,
      branch: req.user.branch,
    });
    req.user.posts.push(newPost._id);
    await req.user.save();
    return res.status(201).json({
      message: 'Post created',
      newPost,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 422;
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    if (post.author._id != req.user._id) {
      throw new Error('Unauthorized');
    }
    return res.status(200).json({
      message: 'Post Deleted',
      status: 204,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 404;
    next(err);
  }
};
