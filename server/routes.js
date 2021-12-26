const { Router } = require('express');

const router = Router();

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

router.use('/posts', postRoutes);

router.use('/users', userRoutes);

module.exports = router;
