const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    res.status(200).json({
      status: 200,
      message: 'Login success',
      user: { email, password },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = adminLogin;
