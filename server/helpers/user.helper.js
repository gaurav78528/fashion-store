const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    await bcrypt.hash(password, 5, (err, hashedPassword) => {
      // Store hash in your password DB.
      if (err) {
        return err;
      } else {
        return hashedPassword;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  await bcrypt.compare(password, hashedPassword, (err, result) => {
    if (result) {
      return result;
    } else {
      return err;
    }
    // result == true
  });
};

module.exports = { hashPassword, comparePassword };
