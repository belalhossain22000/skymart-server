import generateToken from "../../utils/generateToken.js";
import { UserModel } from "./userModel.js";


// create user route
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


// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const loginUser = async (res,payload) => {
  const { email, password } = payload;
  const result = await UserModel.findOne({ email });
 

  if (result && (await result?.matchPassword(password))) {
    // generateToken(res, user?._id);

    if (result) {
      const user = {
        _id: result?._id,
        name: result?.name,
        email: result.email,
      };
      return user;
    }
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
};
const getUserProfile = async () => {
  const result = await UserModel.find()
  console.log(result)
};

export const UserServices = {
  createStudentIntoDB,
  loginUser,
  getUserProfile
};
