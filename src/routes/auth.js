const router = require('express').Router();
const { adminRegister, adminLogin } = require('../api/v1/auth');
const { adminLoginValidation, adminRegistrationValidation } = require('../api/v1/auth/validation');

router.post('/superadmin/register', adminRegistrationValidation, adminRegister);
router.post('/admin/login', adminLoginValidation, adminLogin);

module.exports = router;
