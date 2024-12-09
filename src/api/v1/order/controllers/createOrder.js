const createOrderService = require('../../../../services/order/createOrder');

const createOrder = async (req, res, next) => {
  try {
    const { user } = req;
    const { billingAddress, shippingAddress, lineItems, totalPrices, totalDiscount, paymentGateway, merchantId, fullfillmentBy } = req.body;

    if (user.role !== 'customer') {
      return res.status(403).json({
        status: 403,
        error: 'Forbidden access',
      });
    }

    const order = await createOrderService({
      orderId: `ORD-${Date.now().toString().slice(-6)}`,
      customerId: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      billingAddress,
      shippingAddress,
      lineItems,
      totalPrices,
      totalDiscount,
      paymentGateway,
      merchantId,
      fullfillmentBy,
    });

    if (!order) {
      return res.status(400).json({
        status: 400,
        error: 'Order not created',
      });
    }

    return res.status(201).json({
      status: 201,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createOrder;
