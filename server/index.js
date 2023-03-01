const express = require("express");
const morgan = require("morgan");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");

// dotenv config
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/users", userRouter);

// Rest API
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Home Page" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database Successfully.");
  } catch (error) {
    console.log("Connection to Database Failed.");
    console.log(error);
  }
  console.log(`Server Running on Port ${PORT}`);
});
