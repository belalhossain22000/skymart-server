import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.js";
import catchAsync from "../../utils/catchAsync.js";
import { UserServices } from "./user.service.js";
import generateToken from "../../utils/generateToken.js";

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
  generateToken(res, result?._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User loged in successfully",
    data: result,
  });
  

});

const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logout in successfully",
    data: null,
  });
};
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
  getUserProfile,
  logoutUser
};
