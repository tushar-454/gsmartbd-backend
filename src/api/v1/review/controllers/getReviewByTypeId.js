const getReviewByTypeIdService = require('../../../../services/review/getReviewByTypeId');

const getReviewByTypeId = async (req, res, next) => {
  try {
    const { typeId } = req.params;
    const reviews = await getReviewByTypeIdService(typeId);
    if (!reviews) {
      return res.status(404).json({
        status: 404,
        error: 'Reviews not found',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Reviews found successfully',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getReviewByTypeId;
