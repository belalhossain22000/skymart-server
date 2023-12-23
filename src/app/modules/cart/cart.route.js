import express from "express";
import { cartValidationSchema } from "./cart.validation.js";
import { cartController } from "./cart.controller.js";
import validateRequest from "../../middleware/validateRequest.js";


const router = express.Router();

router.post(
  "/add",
  validateRequest(cartValidationSchema),
  cartController.createCart
);


export const CartRoutes = router;
