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

// get all products
const getProducts = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProductService.getProductFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is Retrieve successfully",
    data: result,
  });
});

// get single product
const getSingleProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProductService.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is Retrieve successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getSingleProduct,
  getProducts
};
