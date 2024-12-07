const router = require('express').Router();
const { createCart, getCartsById, cleanCart, deleteCartItem, updateCartItem } = require('../api/v1/cart/controllers');
const { createCartValidation } = require('../api/v1/cart/validation');

router.post('/', createCartValidation, createCart);
router.delete('/:customerId/clean', cleanCart);
router.delete('/:customerId/item/:itemId', deleteCartItem);
router.put('/:customerId/item/:itemId', updateCartItem);
router.get('/:id', getCartsById);

module.exports = router;
