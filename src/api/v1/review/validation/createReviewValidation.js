const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const schema = z.object({
  reviewType: z.string().refine((reviewType) => ['product', 'merchant'].includes(reviewType)),
  typeId: z.string(),
  rating: z.number().min(1).max(5),
  reviewText: z.string(),
});

const createReviewValidation = (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const result = schema.safeParse(req.body);
    res.status(400).json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = createReviewValidation;
