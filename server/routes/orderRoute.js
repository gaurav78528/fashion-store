const express = require("express");
const {
  newOrderController,
  getSingleOrderController,
  getmyOrdersController,
} = require("../controllers/orderController");
const { authenticate } = require("../middlewares/authenticate.middleware");
const { authorizeRoles } = require("../middlewares/authorizeRoles.middleware");
const orderRouter = express.Router();

orderRouter.post("/new", authenticate, newOrderController);
orderRouter.get(
  "/order/:id",
  authenticate,
  authorizeRoles("admin"),
  getSingleOrderController
);
orderRouter.get("/myorders", authenticate, getmyOrdersController);

module.exports = { orderRouter };
