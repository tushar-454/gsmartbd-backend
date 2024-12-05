const router = require('express').Router();
const { createProduct, getProducts, getProductById, updateProductById, getProductsByMerchantId, deleteProductById } = require('../api/v1/product/controllers');
const createProductValidation = require('../api/v1/product/validation/createProductValidation');
const updateProductByIdValidation = require('../api/v1/product/validation/updateProductByIdValidation');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createProductValidation, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', validateToken, updateProductByIdValidation, updateProductById);
router.get('/merchant/:merchantId', getProductsByMerchantId);
router.delete('/:id', validateToken, deleteProductById);

module.exports = router;
