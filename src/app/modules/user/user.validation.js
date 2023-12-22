import z from "zod";
const createUserValidationSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Name must start with a capital letter",
    }),
  email: z.string().email(),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
    })
    .max(20, { message: "Password cannot be more than 20 characters" }),
});

export const UserValidation = {
  createUserValidationSchema,
};
