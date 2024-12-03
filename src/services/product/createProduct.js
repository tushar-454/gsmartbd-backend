const createError = require('../../utils/createError');
const Product = require('../../models/Product');

const createProduct = async ({ title, htmlBody, productType, images, varients, tags, slug, ownerId, ownerModel, stock }) => {
  try {
    const newProduct = await new Product({
      title,
      htmlBody,
      productType,
      images,
      varients,
      tags,
      rating: 0,
      theme: 0,
      status: 'draft',
      slug,
      ownerId,
      ownerModel,
      stock,
    });
    const product = await newProduct.save();
    if (!product) return null;
    return product._doc;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = createProduct;
