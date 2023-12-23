import { z } from 'zod';

//  validation schema for Product
const createProductSchema = z.object({
  title: z.string().nonempty(),
  image: z.string().url(),
  color: z.string(),
  size: z.enum(['S', 'M', 'L', 'XL', 'XXL']),
  price:z.number(),
  brand:z.string()
});

export const ProductValidation = {
    createProductSchema,
};
