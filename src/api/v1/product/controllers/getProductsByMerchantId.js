const getProductsByQuery = require('../../../../services/product/getProductsByQuery');

const getProductsByMerchantId = async (req, res, next) => {
  try {
    const { merchantId } = req.params;

    const products = await getProductsByQuery({ ownerId: merchantId });

    const filterProducts = products.map((product) => {
      const productDoc = product._doc;
      [productDoc.image] = productDoc.images;
      delete productDoc.images;
      delete productDoc.htmlBody;
      delete productDoc.tags;
      delete productDoc.status;
      delete productDoc.varients;
      delete productDoc.createdAt;
      delete productDoc.updatedAt;
      delete productDoc.__v;
      return productDoc;
    });

    res.status(200).json({
      status: 200,
      message: 'Products retrieved successfully',
      data: filterProducts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getProductsByMerchantId;
