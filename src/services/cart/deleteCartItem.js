const Cart = require('../../models/Cart');
const createError = require('../../utils/createError');

const deleteCartItem = async (customerId, itemId) => {
  try {
    const cart = await Cart.findOne({ customerId });
    const removeCart = cart.items.filter((item) => item._id.toString() !== itemId.toString());
    cart.items = removeCart;
    cart.total = removeCart.reduce((acc, item) => acc + item.total, 0);
    return await cart.save();
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = deleteCartItem;
