const cleanCartService = require('../../../../services/cart/cleanCart');

const cleanCart = async (req, res, next) => {
  try {
    const { customerId } = req.params;
    const { user } = req;
    console.log(user);
    if (user.role !== 'customer' || user._id.toString() !== customerId.toString()) {
      return res.status(403).json({ status: 403, error: 'Forbidden access' });
    }
    const cleaned = await cleanCartService(customerId);
    if (cleaned.deletedCount === 0) {
      return res.status(404).json({ status: 404, error: 'Cart not found/deleted' });
    }
    res.status(200).json({ status: 200, message: 'Cart cleaned successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = cleanCart;
