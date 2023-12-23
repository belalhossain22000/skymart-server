import { z } from "zod";

// Define a Zod schema for cart data
export const cartValidationSchema = z.object({
    userId: z.string().nonempty(), 
    productId: z.string().nonempty(),
  });

