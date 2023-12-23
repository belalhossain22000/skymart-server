import mongoose from "mongoose";

//  product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },

  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL'], 
    required: true,
  },
});

// product model 
export const ProductModel = mongoose.model("Product", productSchema);


