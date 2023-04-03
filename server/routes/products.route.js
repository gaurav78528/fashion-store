const express = require("express");
const {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  deleteProductController,
  updateProductController,
} = require("../controllers/products.controller");

const productsRouter = express.Router();

// Products Route

productsRouter.get("/", getProductsController);
productsRouter.get("/:_id", getSingleProductController);
productsRouter.post("/add", addNewProductController);
productsRouter.patch("/update/:_id", updateProductController);
productsRouter.delete("/delete/:_id", deleteProductController);

module.exports = { productsRouter };
