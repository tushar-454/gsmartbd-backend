const router = require('express').Router();
const { createReview, getReviewByTypeId, updateReview, deleteReview } = require('../api/v1/review/controllers');
const { createReviewValidation } = require('../api/v1/review/validation');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createReviewValidation, createReview);
router.get('/:typeId', getReviewByTypeId);
router.put('/:reviewId', validateToken, updateReview);
router.delete('/:reviewId', validateToken, deleteReview);

module.exports = router;
