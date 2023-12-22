import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.js";
import catchAsync from "../../utils/catchAsync.js";
import { UserServices } from "./user.service.js";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createStudentIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created successfully",
    data: result,
  });
});

// log in user
const logInUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(res,req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User loged in successfully",
    data: result,
  });
});
// log in user
const getUserProfile = catchAsync(async (req, res) => {
  const result = await UserServices.getUserProfile();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrive in successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  logInUser,
  getUserProfile
};
