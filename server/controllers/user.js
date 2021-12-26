const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./../models/user.model');

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, university, branch, invite } = req.body;
    console.log(!!invite);
    if (!!invite) {
      const invitee = await User.findOne({ inviteCode: invite });
      if (invitee) {
        invitee.inviteCounts++;
        await invitee.save();
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({
        name,
        email,
        university,
        branch,
        password: hashedPassword,
        invitedBy: invitee._id,
      });
      return res.status(201).json({
        message: 'User created',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      university,
      branch,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: 'User created',
      user,
    });
  } catch (error) {
    const err = new Error(error.message);
    if ((error.code = 11000)) {
      err.message = 'User already exists';
      err.statusCode = 404;
      next(err);
    } else {
      next(err);
    }
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new Error();
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Passwords Do not match');
    }
    const token = jwt.sign({ id: user._id }, 'LmaoDedHueHue');
    return res.status(200).json({
      message: 'Login Successful',
      token,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 403;
    next(err);
  }
};

exports.uploadImage = async (req, res, next) => {
  try {
    req.user.profile = '/public/' + req.file.path;
    await req.user.save();
    return res.status(201).json({
      message: 'Image Updated',
    });
  } catch (error) {
    const err = new Error(error.message);
    next(err);
  }
};
