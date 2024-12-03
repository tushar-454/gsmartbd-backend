const Product = require('../../models/Product');
const createError = require('../../utils/createError');

const getProduct = async () => {
  try {
    const products = await Product.find();
    if (!products) return null;
    return products;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = getProduct;
