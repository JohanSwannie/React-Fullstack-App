const express = require("express");
const { mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database successfully connected"))
  .catch((error) => console.log("Database Not Connected", error));

// middleware

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));
