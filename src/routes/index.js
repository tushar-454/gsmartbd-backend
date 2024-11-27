const router = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const authRoutes = require('./auth');
const superAdminRoutes = require('./superAdmin');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/superadmin', validateToken, superAdminRoutes);

module.exports = router;
