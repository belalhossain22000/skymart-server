import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { CartService } from "./cart.service.js";


// added product route
const createCart = catchAsync(async (req, res) => {
  const result = await CartService.creteCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is Added successfully",
    data: result,
  });
});

export const cartController = {
  createCart,
};
