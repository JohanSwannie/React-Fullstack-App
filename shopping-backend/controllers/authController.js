const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");

// Test endpoint

const test = (req, res) => {
  res.json("test is working just fine old teddy bear");
};

//Register User endpoint

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name is entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // check if email is entered
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    // Check if email already exists
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({
        error: "This email is taken already",
      });
    }
    // Check if password is entered - also check that password is at least 6 characters long
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and need to be at least 6 characters long",
      });
    }
    // Hash the password
    const hashedPassword = await hashPassword(password);
    // Create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login User endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found for that email",
      });
    }
    // Check if passwords match
    const passwordsMatch = await comparePassword(password, user.password);
    if (passwordsMatch) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res.cookie("token", token).json(user);
        }
      );
    } else {
      return res.json({
        error: "Password not matching original password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Profile endpoint

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
  } else {
    res.json(null);
  }
};

// Delete cookie endpoint

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.end();
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
