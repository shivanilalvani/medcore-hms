const Doctor = require("../models/Doctor");
const User = require("../models/User");

const createDoctor = async (req, res) => {
  try {
    const {
      hospitalId,
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
      departmentId,
      employeeId,
      specialization,
      qualification,
      experienceYears,
      consultationFee,
      licenseNumber,
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Doctor already exists",
      });
    }

    const user = await User.create({
      hospitalId,
      firstName,
      lastName,
      email,
      password,
      role: "DOCTOR",
      phone,
      gender,
    });

    const doctor = await Doctor.create({
      hospitalId,
      userId: user._id,
      departmentId,
      employeeId,
      specialization,
      qualification,
      experienceYears,
      consultationFee,
      licenseNumber,
    });

    res.status(201).json({
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate("userId", "-password")
      .populate("departmentId");

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDoctor,
  getDoctors,
};