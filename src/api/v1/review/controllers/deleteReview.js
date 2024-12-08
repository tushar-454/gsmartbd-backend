const reviewByProperty = require('../../../../services/review/reviewByProperty');

const deleteReview = async (req, res, next) => {
  try {
    const { user } = req;
    const { reviewId } = req.params;
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

    await review.deleteOne();
    res.status(200).json({
      status: 200,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteReview;
