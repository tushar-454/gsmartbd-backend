const router = require('express').Router();
const { adminRegister, adminLogin } = require('../api/v1/auth');
const merchantLogin = require('../api/v1/auth/controllers/merchantLogin');
const merchantRegister = require('../api/v1/auth/controllers/merchantRegister');
const { adminLoginValidation, adminRegistrationValidation } = require('../api/v1/auth/validation');
const merchantRegistrationValidation = require('../api/v1/auth/validation/merchantRegistrationValidation');

router.post('/superadmin/register', adminRegistrationValidation, adminRegister);
router.post('/admin/login', adminLoginValidation, adminLogin);
// merchant regsister and login
router.post('/merchant/register', merchantRegistrationValidation, merchantRegister);
router.post('/merchant/login', adminLoginValidation, merchantLogin);

module.exports = router;
