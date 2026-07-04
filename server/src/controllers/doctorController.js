const Doctor = require("../models/Doctor");
const generateEmployeeId = require("../utils/generateEmployeeId");

// Create Doctor
const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create({
      ...req.body,
      employeeId: await generateEmployeeId(),
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

// Get All Doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate("userId", "firstName lastName email")
      .populate("departmentId", "name")
      .populate("hospitalId", "name");

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Doctor By Id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate("userId")
      .populate("departmentId")
      .populate("hospitalId");

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
};