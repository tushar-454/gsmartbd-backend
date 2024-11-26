const router = require('express').Router();
const { adminRegister, adminLogin } = require('../api/v1/auth');
const { adminLoginValidation } = require('../api/v1/auth/validation');

router.post('/superadmin/register', adminRegister);
router.post('/admin/login', adminLoginValidation, adminLogin);

module.exports = router;
