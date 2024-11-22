const createError = require('../../../../utils/createError');

const adminLogin = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    res.status(200).json({
      status: 200,
      message: 'Login success',
      user: { name, email },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = adminLogin;
