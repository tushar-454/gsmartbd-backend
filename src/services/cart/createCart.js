const Cart = require('../../models/Cart');
const createError = require('../../utils/createError');

const createCart = async ({ customerId, items, total }) => {
  try {
    const cart = await Cart.create({
      customerId,
      items,
      total,
    });

    if (cart) return cart._doc;
    return cart;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = createCart;
