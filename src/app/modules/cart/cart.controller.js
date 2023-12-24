import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { CartService } from "./cart.service.js";

// added product route
const createCart = catchAsync(async (req, res) => {
  const result = await CartService.creteCartIntoDB(req.body);
console.log(result)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is Added successfully",
    data: result,
  });
});

// get single cart
const getSingleCart = catchAsync(async (req, res) => {
  const userId = req.params.id;
  // console.log(userId)
  const result = await CartService.getSingleCartFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart is Retrieve successfully",
    data: result,
  });
});

export const cartController = {
  createCart,
  getSingleCart,
};
