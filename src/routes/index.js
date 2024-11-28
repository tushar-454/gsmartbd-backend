const router = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const authRoutes = require('./auth');
const superAdminRoutes = require('./superAdmin');
const adminRoutes = require('./admin');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/superadmin', validateToken, superAdminRoutes);
router.use('/api/v1/admin', validateToken, adminRoutes);

module.exports = router;
