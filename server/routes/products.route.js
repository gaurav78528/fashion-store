const express = require("express");
const {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  deleteProductController,
  updateProductController,
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
  "/add",
  authenticate,
  authorizeRoles("admin"),
  addNewProductController
);
productsRouter.patch(
  "/update/:_id",
  authenticate,
  authorizeRoles("admin"),
  updateProductController
);
productsRouter.delete(
  "/delete/:_id",
  authenticate,
  authorizeRoles("admin"),
  deleteProductController
);

module.exports = { productsRouter };
