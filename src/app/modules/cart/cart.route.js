import express from "express";

import { cartController } from "./cart.controller.js";
import validateRequest from "../../middleware/validateRequest.js";
import { CartSchema } from "./cart.validation.js";

const router = express.Router();

router.post(
  "/add",
  // validateRequest(CartSchema.cartValidationSchema),
  cartController.createCart
);

router.get(
  "/:id",
  cartController.getSingleCart
);

export const CartRoutes = router;
