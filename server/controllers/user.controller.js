const { hashPassword } = require("../helpers/user.helper");
const { UserModel } = require("../models/User.model");

const userRegisterController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    // FORM VALIDATION
    if (!name || !email || !password || !phone || !role) {
      return res.send({ message: "Please Fill all the Details." });
    }

    // Checking Already Existing User
    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
      return res.status(200).send({
        success: true,
        message: "User Already Registered. Please Login.",
      });
    }

    // Register New User
    const hashedPassword = await hashPassword(password);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    await newUser.save();
    // console.log(hashedPassword);

    res.status(201).send({
      success: true,
      message: "User Registered Successfully.",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to Register User.",
      error,
    });
  }
};

module.exports = { userRegisterController };
