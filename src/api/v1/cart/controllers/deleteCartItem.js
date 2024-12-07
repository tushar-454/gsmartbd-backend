const deleteCartItemService = require('../../../../services/cart/deleteCartItem');

const deleteCartItem = async (req, res, next) => {
  try {
    const { user } = req;
    const { customerId, itemId } = req.params;

    if (user.role === 'admin' || user.role === 'superadmin' || user.role === 'merchant') {
      return res.status(403).json({
        status: 403,
        error: 'You cannot delete cart items',
      });
    }

    const cart = await deleteCartItemService(customerId, itemId);
    if (!cart) {
      return res.status(404).json({ status: 404, error: 'Cart not found' });
    }
    res.status(200).json({ status: 200, message: 'Cart item deleted successfully', cart });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCartItem;
