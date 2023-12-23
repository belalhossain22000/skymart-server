import { ProductModel } from "./product.model.js";

// Crete product
const creteProductIntoDB = async (payload) => {
  const result = await ProductModel.create(payload);

  return result;
};
// Crete product
const getProductFromDB = async () => {
  const result = await ProductModel.find();

  return result;
};
// get single product
const getSingleProductFromDB = async (id) => {
  const result = await ProductModel.findById(id);
  
  // checcking prodct is retrieve or not
  if (!result) {
    throw new Error(`Product is not found with the id ${id}`);
  }
  return result;
};

export const ProductService = {
  creteProductIntoDB,
  getSingleProductFromDB,
  getProductFromDB,
};
