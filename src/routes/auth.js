const router = require('express').Router();
const { adminRegister, adminLogin } = require('../api/v1/auth');
const changePassword = require('../api/v1/auth/controllers/changePassword');
const customerLogin = require('../api/v1/auth/controllers/customerLogin');
const customerRegister = require('../api/v1/auth/controllers/customerRegister');
const { sendVerificationCode, verifyCode, resetPassword } = require('../api/v1/auth/controllers/forgotPassword');
const logoutUser = require('../api/v1/auth/controllers/logoutUser');
const merchantLogin = require('../api/v1/auth/controllers/merchantLogin');
const merchantRegister = require('../api/v1/auth/controllers/merchantRegister');
const { adminLoginValidation, adminRegistrationValidation } = require('../api/v1/auth/validation');
const customerRegistrationValidation = require('../api/v1/auth/validation/customerRegistrationValidation');
const merchantRegistrationValidation = require('../api/v1/auth/validation/merchantRegistrationValidation');
const validateToken = require('../middlewares/validateToken');

router.post('/superadmin/register', adminRegistrationValidation, adminRegister);
router.post('/admin/login', adminLoginValidation, adminLogin);
// merchant regsister and login
router.post('/merchant/register', merchantRegistrationValidation, merchantRegister);
router.post('/merchant/login', adminLoginValidation, merchantLogin);
// customer regsister and login
router.post('/customer/register', customerRegistrationValidation, customerRegister);
router.post('/customer/login', adminLoginValidation, customerLogin);
// logout route
router.post('/logout', logoutUser);
// change password
router.patch('/change-password', validateToken, changePassword);
// forgot password
router.post('/forgot-password/send-verification-code', sendVerificationCode);
router.post('/forgot-password/verify-code', verifyCode);
router.post('/forgot-password/reset-password', resetPassword);

module.exports = router;
