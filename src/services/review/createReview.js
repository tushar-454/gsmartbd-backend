const Review = require('../../models/Review');
const createError = require('../../utils/createError');

const createReview = async ({ reviewType, typeId, typeModel, productId, customerId, rating, reviewText }) => {
  try {
    const review = new Review({
      reviewType,
      typeId,
      typeModel,
      productId,
      customerId,
      rating,
      reviewText,
    });
    return await review.save();
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = createReview;
