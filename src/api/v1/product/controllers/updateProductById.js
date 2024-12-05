const updateProductService = require('../../../../services/product/updateProduct');
const productByProperty = require('../../../../services/product/productByProperty');

const updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;
    const { title, htmlBody, categories, status, images, varients, tags, stock, coupon, discount, theme, rating } = req.body;

    if (user.role !== 'admin' && user.role !== 'superadmin' && user.role !== 'merchant') {
      return res.status(403).json({
        status: 403,
        error: 'Forbidden access',
      });
    }

    const product = await productByProperty('_id', id);

    if (user.role === 'merchant' && product.ownerId.toString() !== user._id.toString()) {
      return res.status(403).json({
        status: 403,
        error: 'Forbidden access',
      });
    }

    if (!product) {
      return res.status(404).json({
        status: 404,
        error: 'Product not found',
      });
    }

    let slug;
    if (title) slug = title.toLowerCase().split(' ').join('-');

    const updatedProduct = await updateProductService({ id, title, htmlBody, categories, status, images, varients, tags, stock, coupon, discount, slug, theme, rating });
    if (updatedProduct.modifiedCount === 0) {
      return res.status(400).json({
        status: 400,
        error: 'Product not updated',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProductById;
