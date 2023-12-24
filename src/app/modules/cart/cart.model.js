import mongoose from "mongoose"


//  CartItem schema 
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1 
  }
});




// Define the Cart schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  cart: {
    type: [cartItemSchema],
    required: true,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
    timestamps:true
});

//  Cart model
export const CartModel = mongoose.model('Cart', cartSchema);


