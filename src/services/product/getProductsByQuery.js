const Product = require('../../models/Product');
const createError = require('../../utils/createError');

const getProductsByQuery = async (query) => {
  try {
    const products = await Product.find(query);
    return products;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = getProductsByQuery;
