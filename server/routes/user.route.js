const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userLogoutController,
  forgetPasswordController,
  resetPasswordController,
  getUserDetailsController,
  updatePasswordController,
} = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");

const userRouter = express.Router();

// Register Route

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.get("/logout", userLogoutController);
userRouter.post("/password/forget", forgetPasswordController);
userRouter.put("/password/reset/:token", resetPasswordController);
userRouter.get("/user", authenticate, getUserDetailsController);
userRouter.put("/user/password/update", authenticate, updatePasswordController);

module.exports = { userRouter };
