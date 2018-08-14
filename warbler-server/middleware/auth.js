require('dotenv').load();
const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
  const unauthorizedMessage = {
    status: 401,
    message: 'Please log in first',
  };
  try {
    let token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload) return next();

      return next(unauthorizedMessage);
    });
  } catch (err) {
    return next(unauthorizedMessage);
  }
};

exports.ensureCorrectUser = function(req, res, next) {
  const unauthorizedAccessMessage = {
    status: 401,
    message: 'Unauthorized',
  };
  try {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload && payload.id === req.params.id) return next();

      return next(unauthorizedAccessMessage);
    });
  } catch (err) {
    return next(unauthorizedAccessMessage);
  }
};
