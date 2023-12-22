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

export const UserControllers = {
  createUser,
};
