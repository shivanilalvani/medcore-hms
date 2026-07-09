const Patient = require("../models/Patient");
const User = require("../models/User");

const createPatient = async (req, res) => {
  try {
    const {
      hospitalId,
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
      bloodGroup,
      emergencyContact,
      allergies,
      medicalHistory,
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Patient already exists",
      });
    }

    const user = await User.create({
      hospitalId,
      firstName,
      lastName,
      email,
      password,
      role: "PATIENT",
      phone,
      gender,
    });

    const patient =
      await Patient.create({
        hospitalId,
        userId: user._id,
        bloodGroup,
        emergencyContact,
        allergies,
        medicalHistory,
      });

    res.status(201).json({
      message: "Patient created successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
      .populate("userId", "-password");

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPatient,
  getPatients,
};