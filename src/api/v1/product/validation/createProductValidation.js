const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const schema = z.object({
  title: z.string().max(100),
  htmlBody: z.string(),
  productType: z.string(),
  categories: z.string(),
  images: z.array(z.string()),
  varients: z.array(
    z.object({
      option: z.string(),
      value: z.string(),
      price: z.number(),
      merchantPrice: z.number(),
      inventoryQuantity: z.number(),
      sku: z.string(),
    })
  ),
  tags: z.array(z.string()).optional(),
});

const createProductValidation = async (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const result = schema.safeParse(req.body);
    res.status(400).json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = createProductValidation;
