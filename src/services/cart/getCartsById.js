const Cart = require('../../models/Cart');
const createError = require('../../utils/createError');

const getCartsById = async (id) => {
  try {
    const carts = await Cart.findOne({ customerId: id }).populate('items.productId', 'title images varients');
    return carts;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = getCartsById;
