const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [20, "First Name cannot exceed 20 characters"],
    minLength: [4, "First Name should be more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password must be 8 characters Long"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please Enter Your Confirm Password"],
    minLength: [8, "Confirm Password must be 8 characters Long"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
