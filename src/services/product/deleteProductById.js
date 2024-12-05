const Product = require('../../models/Product');
const createError = require('../../utils/createError');

const deleteProductById = async (id) => {
  try {
    const product = await Product.deleteOne({ _id: id });
    return product;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = deleteProductById;
