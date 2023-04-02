const express = require("express");
const {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  deleteProductController,
} = require("../controllers/products.controller");

const productsRouter = express.Router();

// Products Route

productsRouter.get("/", getProductsController);
productsRouter.get("/:_id", getSingleProductController);
productsRouter.post("/add", addNewProductController);
productsRouter.delete("/delete/:_id", deleteProductController);

module.exports = { productsRouter };
