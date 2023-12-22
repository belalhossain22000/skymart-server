import catchAsync from "../utils/catchAsync.js";

const validateRequest = (schema) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      ...req.body,
      cookies: req.cookies,
    });

    next();
  });
};

export default validateRequest;
