const Review = require('../../models/Review');
const createError = require('../../utils/createError');

const getReviewByTypeId = async (typeId) => {
  try {
    const reviews = await Review.find({ typeId }).select('-__v -reviewType -typeModel').populate('customerId', 'name photo');
    return reviews;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = getReviewByTypeId;
