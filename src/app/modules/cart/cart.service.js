import { CartModel } from "./cart.model.js";

// Crete cart
const creteCartIntoDB = async (payload) => {



  const result = await CartModel.create(payload);

  return result;
};

export const CartService = {
    creteCartIntoDB,
};
