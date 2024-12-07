const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const schema = z.object({
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().int().positive(),
      varient: z.number().int(),
    })
  ),
});

const createCartValidation = async (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const result = schema.safeParse(req.body);
    res.status(400).json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = createCartValidation;
