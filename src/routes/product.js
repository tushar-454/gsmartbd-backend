const router = require('express').Router();
const { createProduct, getProducts, getProductById, updateProductById } = require('../api/v1/product/controllers');
const { createProductValidation } = require('../api/v1/product/validation');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createProductValidation, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', validateToken, updateProductById);

module.exports = router;
