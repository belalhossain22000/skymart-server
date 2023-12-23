import mongoose from "mongoose"

// Define the Cart schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel', 
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ProductModel',
    required: true
  },
  quantity: {
    type: Number,
    default: 1 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
    timestamps:true
});

// Create the Cart model
export const CartModel = mongoose.model('Cart', cartSchema);


