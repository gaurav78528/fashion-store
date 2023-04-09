const express = require("express");
const {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  deleteProductController,
  updateProductController,
  productReviewController,
  getProductReviewController,
  deleteProductReviewController,
} = require("../controllers/products.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const { authorizeRoles } = require("../middlewares/authorizeRoles.middleware");

const productsRouter = express.Router();

// Products Route
// productsRouter.use(authenticate);

// productsRouter.use(authenticate);

productsRouter.get("/", getProductsController);

productsRouter.get("/:_id", getSingleProductController);

productsRouter.post(
  "/admin/add",
  authenticate,
  authorizeRoles("admin"),
  addNewProductController
);
productsRouter.patch(
  "/admin/update/:_id",
  authenticate,
  authorizeRoles("admin"),
  updateProductController
);
productsRouter.delete(
  "/admin/delete/:_id",
  authenticate,
  authorizeRoles("admin"),
  deleteProductController
);

productsRouter.put("/review/add", authenticate, productReviewController);
productsRouter.get("/reviews", authenticate, getProductReviewController);
productsRouter.get(
  "/reviews/delete",
  authenticate,
  deleteProductReviewController
);

module.exports = { productsRouter };
