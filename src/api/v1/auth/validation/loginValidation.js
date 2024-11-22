const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

const loginSchema = z.object({
  name: z.string().min(3, 'Minimum 3 char').max(10, 'Max 10 char'),
  email: z
    .string()
    .email('Enter valid email')
    .refine((value) => value.includes('gmail'), {
      message: 'Only gamil allowed',
    }),
});

const loginValidation = (req, res, next) => {
  try {
    req.body = loginSchema.parse(req.body);
    next();
  } catch (error) {
    const result = loginSchema.safeParse(req.body);
    const customError = formatZodErrors(result.error);
    res.status(400).json({ status: 400, errors: customError });
  }
};

module.exports = loginValidation;
