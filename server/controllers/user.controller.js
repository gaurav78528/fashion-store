const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");

const userRegisterController = async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword } = req.body;
    // FORM VALIDATION
    if (!firstName || !email || !password || !confirmPassword) {
      return res.status(403).send({ message: "Please Fill all the Details." });
    } else if (!email.includes("@")) {
      return res.status(403).send({ message: "Please Enter Valid Email." });
    } else if (password.length < 6) {
      return res.status(403).send({ message: "Password must be of length 6." });
    } else if (password !== confirmPassword) {
      return res.status(403).send({ message: "Password Does not Matches." });
    }

    // Checking Already Existing User
    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
      return res.status(500).send({
        message: "User Already Registered. Please Login.",
      });
    }

    // Register New User

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
        return res.status(500).send({ message: err });
      } else {
        const newUser = new UserModel({
          firstName,
          email,
          password: hashedPassword,
          confirmPassword: hashedPassword,
        });
        await newUser.save();
        // console.log(hashedPassword);
        return res.status(201).send({
          message: "User Registered Successfully.",
          newUser,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Failed to Register User.",
      error,
    });
  }
};

const userLoginController = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    // FORM VALIDATION
    if (!firstName || !email || !password) {
      return res.status(403).send({ message: "Please Fill all the Details." });
    } else if (!email.includes("@")) {
      return res.status(403).send({ message: "Please Enter Valid Email." });
    } else if (password.length < 6) {
      return res.status(403).send({ message: "Password must be of length 6." });
    }

    // Checking User Registered Or Not
    const isUserRegistered = await UserModel.findOne({ email });

    if (isUserRegistered) {
      bcrypt.compare(
        password,
        isUserRegistered.password,
        async (err, result) => {
          // result == true
          if (result) {
            jwt.sign(
              { payload: isUserRegistered._id },
              "gaurav",
              (err, token) => {
                if (token) {
                  // console.log(token);

                  // return res
                  //   .cookie("token", token, {
                  //     expires: new Date(Date.now() + 900000),
                  //     httpOnly: true,
                  //   })
                  //   .send("send");
                  res.status(200).send({
                    message: "User Logged In Successfully.",
                    token,
                    user: isUserRegistered,
                  });
                } else {
                  console.log(err);
                  return res.status(500).send({
                    message: "Unable to Generate Token",
                    err,
                  });
                }
              }
            );
          } else {
            console.log(err);
            return res.status(500).send({
              message: "Wrong credentials.",
              err,
            });
          }
        }
      );
    } else {
      return res.status(500).send({
        message: "User Does Not Exist. Please Register.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Failed to Register User.",
      error,
    });
  }
};

module.exports = { userRegisterController, userLoginController };
