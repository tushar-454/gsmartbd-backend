const Review = require('../../models/Review');
const createError = require('../../utils/createError');

const reviewByProperty = async (property, value, isDoc = true) => {
  try {
    const reviews = await Review.findOne({ [property]: value })
      .select('-__v -reviewType -typeModel')
      .populate('customerId', 'name photo');
    if (isDoc && reviews) return reviews._doc;
    return reviews;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = reviewByProperty;
