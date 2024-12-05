const deleteProductByIdService = require('../../../../services/product/deleteProductById');
const productByProperty = require('../../../../services/product/productByProperty');

const deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    const product = await productByProperty('_id', id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (user.role === 'merchant' && product.ownerId !== user._id) {
      return res.status(403).json({ status: 403, error: 'Forbidden access' });
    }

    const deletedProduct = await deleteProductByIdService(id);

    if (deletedProduct.deletedCount === 0) {
      return res.status(404).json({ status: 400, error: 'Product not deleted' });
    }
    res.status(200).json({ status: 200, message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProductById;
