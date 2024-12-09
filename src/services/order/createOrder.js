const Order = require('../../models/Order');
const createError = require('../../utils/createError');

const createOrder = async ({ orderId, customerId, name, email, phone, billingAddress, shippingAddress, lineItems, totalPrices, totalDiscount, paymentGateway, merchantId, fullfillmentBy }) => {
  try {
    const order = await Order.create({
      orderId,
      customerId,
      name,
      email,
      phone,
      billingAddress,
      shippingAddress,
      lineItems,
      totalPrices,
      totalDiscount,
      paymentGateway,
      merchantId,
      fullfillmentBy,
    });
    return await order.save();
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = createOrder;
