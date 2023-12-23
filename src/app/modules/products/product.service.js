import { ProductModel } from "./product.model.js";

// create user route
const creteProductIntoDB = async (payload) => {

  const result = await ProductModel.create(payload);

  return result;
};

export const ProductService = {
  creteProductIntoDB,
};
