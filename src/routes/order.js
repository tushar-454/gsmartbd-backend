const router = require('express').Router();
const { createOrder } = require('../api/v1/order/controllers');
const { createOrderValidation } = require('../api/v1/order/validation');

router.post('/', createOrderValidation, createOrder);

module.exports = router;
