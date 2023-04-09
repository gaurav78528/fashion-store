const { OrderModel } = require("../models/Order.model");
const mongoose = require("mongoose");

// NEW ORDER

const newOrderController = async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  try {
    const order = await new OrderModel({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });
    await order.save();
    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
      error: error.message,
    });
  }
};

// GET SINGLE ORDER

const getSingleOrderController = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({
        message: "Order Not Found with this id",
      });
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
      error: error.message,
    });
  }
};

// GET LOGGED IN USER ORDERS
const getmyOrdersController = async (req, res) => {
  console.log(req.user._id);

  try {
    const myOrders = await OrderModel.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      myOrders,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong!",
      error: error.message,
    });
  }
};
module.exports = {
  newOrderController,
  getSingleOrderController,
  getmyOrdersController,
};
