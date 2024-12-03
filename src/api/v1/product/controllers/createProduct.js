const createProductService = require('../../../../services/product/createProduct');

const createProduct = async (req, res, next) => {
  try {
    const { user } = req;
    const { title, htmlBody, productType, images, varients, tags } = req.body;
    if (user.role !== 'admin' && user.role !== 'merchant') {
      return res.status(403).send({
        status: 403,
        error: 'Forbidden access',
      });
    }

    // construct some property based on user input and role
    const slug = title.toLowerCase().split(' ').join('-');
    const ownerId = user._id;
    const ownerModel = user.role === 'admin' ? 'Admin' : 'Merchant';
    const stock = varients.reduce((acc, curr) => acc + curr.inventoryQuantity, 0);

    const createdProduct = await createProductService({ title, htmlBody, productType, images, varients, tags, slug, ownerId, ownerModel, stock });

    if (!createdProduct) {
      return res.status(400).send({
        status: 400,
        error: 'Product not created',
      });
    }
    res.status(201).json({
      status: 201,
      message: 'Product created successfully',
      data: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createProduct;
