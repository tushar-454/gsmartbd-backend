const createError = require('../../utils/createError');
const productByProperty = require('./productByProperty');

const updateProduct = async ({ id, title, htmlBody, categories, status, images, varients, tags, stock, coupon, discount, slug, theme, rating }) => {
  try {
    const product = await productByProperty('_id', id, false);

    product.title = title ?? product.title;
    product.htmlBody = htmlBody ?? product.htmlBody;
    product.categories = categories ?? product.categories;
    product.status = status ?? product.status;
    product.images = images ?? product.images;
    product.varients = varients ?? product.varients;
    product.tags = tags ?? product.tags;
    product.stock = stock ?? product.stock;
    product.coupon = coupon ?? product.coupon;
    product.discount = discount ?? product.discount;
    product.slug = slug ?? product.slug;
    product.theme = theme ?? product.theme;
    product.rating = rating ?? product.rating;

    const updatedProduct = await product.save();
    return updatedProduct;
  } catch (error) {
    createError(error.message, error.status);
  }
};
module.exports = updateProduct;
