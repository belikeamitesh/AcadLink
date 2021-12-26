const jwt = require('jsonwebtoken');

const User = require('./../models/user.model');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await jwt.verify(token, 'LmaoDedHueHue');
    const user = await User.findById(decoded.id).populate('invitedBy', 'name');
    req.user = user;
    next();
  } catch (error) {
    next(new Error(error.message));
  }
};
