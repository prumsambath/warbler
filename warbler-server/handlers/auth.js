const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      { id, username, profileImageUrl },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (err) {
    if (err.code == 11000) {
      err.message = 'Sorry, username or email is already taken';
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.signin = async function(req, res, next) {
  const invalidAccountMessage = {
    status: 400,
    message: 'Invalid username or password.',
  };
  try {
    let user = await db.User.findOne({ email: req.body.email });
    if (!user) {
      return next(invalidAccountMessage);
    }
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let { id, username, profileImageUrl } = user;
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl,
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({ id, username, profileImageUrl, token });
    }
    return next(invalidAccountMessage);
  } catch (err) {
    return next(err);
  }
};
