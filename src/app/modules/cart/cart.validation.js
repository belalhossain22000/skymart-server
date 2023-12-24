import { z } from "zod";


//  Zod schema for Cart Item
const cartItemValidationSchema = z.object({
  productId: z.string().nonempty(), 
  quantity: z.number().int().positive().default(1),
});


// e Zod schema for the Cart
const cartValidationSchema = z.object({
  userId: z.string().nonempty(),
  cart: z.array(cartItemValidationSchema),
});
export const CartSchema={
  cartValidationSchema
}
