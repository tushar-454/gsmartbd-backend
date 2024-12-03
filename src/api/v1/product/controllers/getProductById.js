const productByProperty = require('../../../../services/product/productByProperty');

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id && id.length !== 24) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid ID',
      });
    }

    const product = await productByProperty('_id', id);
    if (!product) {
      return res.status(404).json({
        status: 404,
        error: 'Product not found',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Product retrieved successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getProductById;
