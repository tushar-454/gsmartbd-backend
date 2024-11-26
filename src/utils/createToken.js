const jwt = require('jsonwebtoken');
const throwError = require('./throwError');

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return token;
  } catch (error) {
    throwError(error);
  }
};

module.exports = createToken;
