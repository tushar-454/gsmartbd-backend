const Cart = require('../../models/Cart');
const createError = require('../../utils/createError');

const cleanCart = async (customerId) => {
  try {
    const cleaned = await Cart.deleteMany({ customerId });
    return cleaned;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = cleanCart;
