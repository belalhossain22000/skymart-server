import { UserModel } from "./userModel.js";

const createStudentIntoDB = async (payload) => {
  const { email } = payload;

  // checking user is exist or not exist
  const isUserExist = await UserModel.findOne({ email });

  if (isUserExist) {
    throw new Error("User already exist");
  }

  // creating user
  const result = await UserModel.create(payload);
  if (result) {
    const user = {
      _id: result?._id,
      name: result?.name,
      email: result.email,
    };
    return user;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
