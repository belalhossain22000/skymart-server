import { UserModel } from "../user/userModel.js";
import { CartModel } from "./cart.model.js";

// get cart by user id
const creteCartIntoDB = async (payload) => {
  try {
    const { userId, cart: userCart } = payload;

    // Check if the user exists
    const isUserExist = await UserModel.findById(userId);
    if (!isUserExist) {
      throw new Error(`User not found with the ID ${userId}`);
    }

    // Find the user's cart
    let cart = await CartModel.findOne({ userId });

    // If the user doesn't have a cart, create a new cart and add the product
    if (!cart) {
      cart = new CartModel({ userId, cart: userCart });
      await cart.save();
      return cart;
    }

    // If the user has a cart, check if the product already exists in the cart
    for (const item of userCart) {
      const existingProduct = cart.cart.find(
        (cartProduct) => cartProduct.productId === item.productId
      );

      if (existingProduct) {
        // If the product already exists, increase its quantity by one
        existingProduct.quantity += 1;
      } else {
        // If the product doesn't exist, add it to the cart
        cart.cart.push({ productId: item.productId, quantity: item.quantity });
      }
    }

    // Save the updated cart
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
  }
};

const getSingleCartFromDB = async (userId) => {
  console.log(userId);
  // check is user exist with the id
  const isUserExist = await UserModel.findOne({ _id: userId });

  if (!isUserExist) {
    throw new Error(`User not exist with the id ${userId}`);
  }

  // checking is user cartExist
  const isUserCartExist = await CartModel.findOne({ userId })
  .populate({
    path: 'userId',
    select: '-password' 
  })
  .populate({
    path: 'cart.productId',
    model: 'Product',
    select: 'title price image'
  });

  if (!isUserCartExist) {
    throw new Error(`User Cart not  exist with the id ${userId}`);
  } else {
    return isUserCartExist;
  }
};

export const CartService = {
  creteCartIntoDB,
  getSingleCartFromDB,
};
