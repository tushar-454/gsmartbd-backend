const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const schema = z.object({
  billingAddress: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    address1: z.string(),
    address2: z.string().optional(),
    city: z.string(),
    district: z.string(),
    zip: z.string(),
  }),
  shippingAddress: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    address1: z.string(),
    address2: z.string().optional(),
    city: z.string(),
    district: z.string(),
    zip: z.string(),
  }),
  lineItems: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().positive(),
      quentity: z.number().int().positive(),
      total: z.number().positive(),
      discount: z.number(),
      image: z.string(),
    })
  ),
  totalPrices: z.number().positive(),
  totalDiscount: z.number().optional(),
  paymentGateway: z.string(),
  merchantId: z.string(),
  fullfillmentBy: z.string().refine((value) => ['merchant', 'admin'].includes(value)),
});

const createOrderValidation = (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    const result = schema.safeParse(req.body);
    res.status(400).json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = createOrderValidation;
