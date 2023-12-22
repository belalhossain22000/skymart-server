import express from "express";
import { UserControllers } from "./user.controller.js";
import validateRequest from "../../middleware/validateRequest.js";
import { UserValidation } from "./user.validation.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser
);
router.post(
  "/login-user",
  validateRequest(UserValidation.loginUserValidationSchema),
  UserControllers.logInUser
);
router.get("/",protect, UserControllers.getUserProfile);

export const UserRoutes = router;
