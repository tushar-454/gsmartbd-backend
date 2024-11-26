const { z } = require('zod');
const formatZodErrors = require('../../../../utils/formatZodErrors');

// admin login validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email('Enter valid email')
    .refine((value) => value.includes('gmail'), {
      message: 'Only gamil allowed',
    }),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/^[a-zA-Z0-9]$/, 'Password must be alphanumeric'),
});

// admin login validation middleware
const loginValidation = (req, res, next) => {
  try {
    req.body = loginSchema.parse(req.body);
    next();
  } catch (error) {
    const result = loginSchema.safeParse(req.body);
    res
      .status(400)
      .json({ status: 400, errors: formatZodErrors(result.error) });
  }
};

module.exports = loginValidation;
