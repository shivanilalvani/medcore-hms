const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const {
      hospitalId,
      firstName,
      lastName,
      email,
      password,
      role,
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
  hospitalId,
  firstName,
  lastName,
  email,
  password,
  role,
});

const userResponse = {
  _id: user._id,
  hospitalId: user.hospitalId,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  isActive: user.isActive,
};

res.status(201).json({
  message: "User registered successfully",
  token: generateToken(user._id),
  user: userResponse,
});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user.isActive) {
  return res.status(403).json({
    message:
      "Your account has been deactivated. Contact administrator.",
  });
}

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

  const userResponse = {
  _id: user._id,
  hospitalId: user.hospitalId,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  isActive: user.isActive,
};

res.status(200).json({
  message: "Login successful",
  token: generateToken(user._id),
  user: userResponse,
});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  res.status(200).json({
    user: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};