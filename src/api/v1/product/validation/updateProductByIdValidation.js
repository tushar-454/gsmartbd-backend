const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const schema = z.object({
  title: z.string().max(100).optional(),
  htmlBody: z.string().optional(),
  categories: z.string().optional(),
  status: z.string().optional(),
  images: z.array(z.string()).optional(),
  varients: z
    .array(
      z.object({
        option: z.string(),
        value: z.string(),
        price: z.number(),
        merchantPrice: z.number(),
        inventoryQuantity: z.number(),
        sku: z.string(),
      })
    )
    .optional(),
  tags: z.array(z.string()).optional(),
  stock: z.number().optional(),
  coupon: z.string().optional(),
  discount: z.array(z.string()).optional(),
  theme: z.number().optional(),
  rating: z.number().optional(),
});

const updateProductByIdValidation = async (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const result = schema.safeParse(req.body);
    res.status(400).json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = updateProductByIdValidation;
