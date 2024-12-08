const createReviewService = require('../../../../services/review/createReview');

const createReview = async (req, res, next) => {
  try {
    const { user } = req;
    const { reviewType, typeId, rating, reviewText } = req.body;
    if (user.role !== 'customer') {
      return res.status(403).json({
        status: 403,
        error: 'Forbidden Access',
      });
    }

    const review = await createReviewService({
      reviewType,
      typeId,
      typeModel: reviewType === 'product' ? 'Product' : 'Merchant',
      customerId: user._id,
      rating,
      reviewText,
    });

    if (!review) {
      return res.status(400).json({
        status: 400,
        error: 'Review not created',
      });
    }

    res.status(201).json({
      status: 201,
      message: 'Review created successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createReview;
