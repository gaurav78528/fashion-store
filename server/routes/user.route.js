const express = require("express");
const { userRegisterController } = require("../controllers/user.controller");

const userRouter = express.Router();

// Register Route

userRouter.post("/register", userRegisterController);

module.exports = { userRouter };
