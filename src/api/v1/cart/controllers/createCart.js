const createCartService = require('../../../../services/cart/createCart');
const productByProperty = require('../../../../services/product/productByProperty');
const getCartsByIdService = require('../../../../services/cart/getCartsById');

const createCart = async (req, res, next) => {
  try {
    const { user } = req;
    const { items } = req.body;

    if (user.role === 'admin' || user.role === 'superadmin' || user.role === 'merchant') {
      return res.status(403).json({
        status: 403,
        error: 'You cannot create carts',
      });
    }

    const cartItems = await Promise.all(
      items?.map(async (item) => {
        // console.log(item);
        const product = await productByProperty('_id', item.productId);

        const calculatePrice = (product.varients[item.varient].price * item.quantity).toFixed(2);

        return {
          ...item,
          total: +calculatePrice,
        };
      })
    );

    const itemsTotal = cartItems?.reduce((acc, item) => acc + item.total, 0);

    // if user have already cart then update the cart
    const userCart = await getCartsByIdService(user._id);
    if (Object.keys(userCart || {}).length === 0) {
      const cart = await createCartService({
        customerId: user._id,
        items: cartItems,
        total: itemsTotal,
      });
      if (!cart) {
        return res.status(400).json({ error: 'Cart not created' });
      }

      res.status(201).json({
        status: 201,
        message: 'Cart created successfully',
        cart,
      });
    }
    userCart.items = [...userCart.items, ...cartItems];
    userCart.total += itemsTotal;
    await userCart.save();
    res.status(201).json({
      status: 201,
      message: 'Items add in existing Cart',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createCart;
