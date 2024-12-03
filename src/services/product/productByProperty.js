const Product = require('../../models/Product');
const createError = require('../../utils/createError');

const productByProperty = async (property, value, isDoc = true) => {
  try {
    const product = await Product.findOne({ [property]: value });
    if (isDoc && product) return product._doc;
    return product;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = productByProperty;
