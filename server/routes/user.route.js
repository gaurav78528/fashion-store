const express = require("express");
const {
  userRegisterController,
  userLoginController,
} = require("../controllers/user.controller");

const userRouter = express.Router();

// Register Route

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);

module.exports = { userRouter };
