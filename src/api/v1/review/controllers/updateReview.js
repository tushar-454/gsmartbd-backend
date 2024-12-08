const reviewByProperty = require('../../../../services/review/reviewByProperty');

const updateReview = async (req, res, next) => {
  try {
    const { user } = req;
    const { reviewId } = req.params;
    const { rating, reviewText } = req.body;
    const review = await reviewByProperty('_id', reviewId, false);

    if (!review) {
      return res.status(404).json({
        status: 404,
        error: 'Review not found',
      });
    }

    if (user.role !== 'customer' || review.customerId._id.toString() !== user._id.toString()) {
      return res.status(403).json({
        status: 403,
        error: 'Forbidden Access',
      });
    }

    review.rating = rating ?? review.rating;
    review.reviewText = reviewText ?? review.reviewText;
    await review.save();
    res.status(200).json({
      status: 200,
      message: 'Review updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateReview;
