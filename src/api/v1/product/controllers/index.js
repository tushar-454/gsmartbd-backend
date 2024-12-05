const createProduct = require('./createProduct');
const getProducts = require('./getProducts');
const getProductById = require('./getProductById');
const updateProductById = require('./updateProductById');
const getProductsByMerchantId = require('./getProductsByMerchantId');
const deleteProductById = require('./deleteProductById');

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  getProductsByMerchantId,
  deleteProductById,
};
