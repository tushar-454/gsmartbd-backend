const getCartsByIdService = require('../../../../services/cart/getCartsById');

const getCartsById = async (req, res, next) => {
  try {
    const { user } = req;
    const { id } = req.params;

    if (user.role !== 'customer') {
      return res.status(403).json({ status: 403, error: 'Forbidden access' });
    }

    const carts = await getCartsByIdService(id);

    // const formattedCarts = carts.map((cart) => {
    //   const items = cart.items.map((item) => ({
    //     id: item.productId._id,
    //     title: item.productId.title,
    //     images: item.productId.images[0],
    //     varients: {
    //       option: item.productId.varients[item.varient].option,
    //       value: item.productId.varients[item.varient].value,
    //       price: item.productId.varients[item.varient].price,
    //       sku: item.productId.varients[item.varient].sku,
    //     },
    //     quantity: item.quantity,
    //     total: item.total,
    //     varient: item.varient,
    //   }));

    //   return {
    //     id: cart._id,
    //     items,
    //     total: cart.total,
    //   };
    // });

    res.status(200).json({
      status: 200,
      message: 'Successfully retrieved carts',
      data: carts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCartsById;
