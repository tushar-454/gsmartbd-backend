const { adminRegister, adminLogin } = require('../api/v1/auth');
const { loginValidation } = require('../api/v1/auth/validation');

const router = require('express').Router();

router.post('/admin/register', adminRegister);
router.post('/admin/login', loginValidation, adminLogin);

module.exports = router;
