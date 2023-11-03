const express = require("express");
const cors = require("cors");

const router = express.Router();

const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/authController");

// Create Middleware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/test", test);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", getProfile);

router.get("/logout", logoutUser);

module.exports = router;
