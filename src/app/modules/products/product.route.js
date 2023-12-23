

import express from "express";
import validateRequest from "../../middleware/validateRequest.js";

import { protect } from "../../middleware/authMiddleware.js";
import { ProductValidation } from "./porduct.validation.js";
import { ProductController } from "./product.controller.js";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidation.createProductSchema),
  ProductController.createProduct
);

// get  product
router.get(
  "/",
  ProductController.getProducts
);

// get single product
router.get(
  "/:id",
  ProductController.getSingleProduct
);


export const ProductRoutes = router;
