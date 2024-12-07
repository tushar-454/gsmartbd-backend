const router = require('express').Router();
const { createCart, getCartsById, cleanCart, deleteCartItem } = require('../api/v1/cart/controllers');
const { createCartValidation } = require('../api/v1/cart/validation');

router.post('/', createCartValidation, createCart);
router.delete('/:customerId/clean', cleanCart);
router.delete('/:customerId/item/:itemId', deleteCartItem);
router.get('/:id', getCartsById);

module.exports = router;
