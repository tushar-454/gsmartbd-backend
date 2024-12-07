const getCartsByIdService = require('../../../../services/cart/getCartsById');

const updateCartItem = async (req, res, next) => {
  try {
    const { customerId, itemId } = req.params;
    const { quentity } = req.body;

    const cart = await getCartsByIdService(customerId);
    const item = cart.items.id(itemId);
    item.quantity = quentity ?? item.quantity;
    console.log(item);
    item.total = (quentity * item.productId.varients[item.varient].price).toFixed(0) ?? item.total;
    cart.total = cart.items.reduce((acc, i) => acc + i.total, 0).toFixed(0);
    await item.save();
    res.status(200).json({
      status: 200,
      message: 'Successfully updated item',
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateCartItem;
