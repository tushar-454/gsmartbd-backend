const adminRegister = require('./controllers/adminRegister');
const adminLogin = require('./controllers/adminLogin');
const changePassword = require('./controllers/changePassword');
const customerLogin = require('./controllers/customerLogin');
const customerRegister = require('./controllers/customerRegister');
const { sendVerificationCode, verifyCode, resetPassword } = require('./controllers/forgotPassword');
const logoutUser = require('./controllers/logoutUser');
const merchantLogin = require('./controllers/merchantLogin');
const merchantRegister = require('./controllers/merchantRegister');

module.exports = {
  adminRegister,
  adminLogin,
  changePassword,
  customerLogin,
  customerRegister,
  sendVerificationCode,
  verifyCode,
  resetPassword,
  logoutUser,
  merchantLogin,
  merchantRegister,
};
