const Product = require('../../models/Product');
const createError = require('../../utils/createError');

const updateProduct = async ({ id, title, htmlBody, categories, status, images, varients, tags, stock, coupon, discount, slug, theme, rating }) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: id },
      {
        title,
        htmlBody,
        categories,
        status,
        images,
        varients,
        tags,
        stock,
        coupon,
        discount,
        slug,
        theme,
        rating,
      }
    );
    return updatedProduct;
  } catch (error) {
    createError(error.message, error.status);
  }
};
module.exports = updateProduct;
