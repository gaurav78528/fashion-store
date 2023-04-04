const { UserModel } = require("../models/User.model");
const { sendToken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const userRegisterController = async (req, res) => {
  const { firstName, email, password } = req.body;
  try {
    const user = await UserModel.create({
      firstName,
      email,
      password,
    });

    const token = user.getJWTToken();
    // console.log(token);
    sendToken(user, 200, res, "User Registered Successfully.");
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: "Failed to Register User.",
      error: "Email Already Exists.",
    });
  }
};

const userLoginController = async (req, res) => {
  const { firstName, email, password } = req.body;
  try {
    if (!firstName || !email || !password) {
      return res.status(401).json({
        message: "Please Fill all Credentials.",
      });
    }
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Wrong Credentials.",
      });
    }

    const isPasswordMatch = user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Wrong Credentials.",
      });
    }
    sendToken(user, 200, res, "User Logged In Successfully.");
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Failed to Login User.",
      error: error.message,
    });
  }
};
const userLogoutController = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Logut.",
    });
  }
};

// FORGET PASSSWORD

const forgetPasswordController = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found.",
    });
  }

  // GET RESET PASSWORD TOKEN

  const resetToken = user.getResetPasswordToken();
  await user.save({
    validateBeforeSave: false,
  });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/users/password/reset/${resetToken}`;

  const message = `Your password reset link is :- \n\n This Link will expire after 10 minutes. \n\n\ ${resetPasswordUrl} \n\n If you have not requested for reset password then please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "FASHION STORE PASSWORD RECOVERY",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully.`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({
      validateBeforeSave: false,
    });
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const resetPasswordController = async (req, res) => {
  try {
    // CREATING TOKEN HASH
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
    const user = await UserModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        message: "Reset Password Token in Invalid or has been expired.",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        message: "Password does not matches.",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong.",
      error: error.message,
    });
  }
};

module.exports = {
  userRegisterController,
  userLoginController,
  userLogoutController,
  forgetPasswordController,
  resetPasswordController,
};
