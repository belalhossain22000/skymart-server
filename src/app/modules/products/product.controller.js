import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.js";
import catchAsync from "../../utils/catchAsync.js";
import { ProductService } from "./product.service.js";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductService.creteProductIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created successfully",
    data: result,
  });
});


export const ProductController={
    createProduct
}