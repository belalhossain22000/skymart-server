

import express from "express";
import validateRequest from "../../middleware/validateRequest.js";

import { protect } from "../../middleware/authMiddleware.js";
import { ProductValidation } from "./porduct.validation.js";
import { ProductController } from "./product.controller.js";

const router = express.Router();

router.post(
  "/create-Product",
  validateRequest(ProductValidation.createProductSchema),
  ProductController.createProduct
);


export const ProductRoutes = router;
