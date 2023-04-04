const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userLogoutController,
  forgetPasswordController,
  resetPasswordController,
} = require("../controllers/user.controller");

const userRouter = express.Router();

// Register Route

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.get("/logout", userLogoutController);
userRouter.post("/password/forget", forgetPasswordController);
userRouter.put("/password/reset/:token", resetPasswordController);

module.exports = { userRouter };
