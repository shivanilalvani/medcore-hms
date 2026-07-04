const Hospital = require("../models/Hospital");

// Create Hospital
const createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);

    res.status(201).json({
      message: "Hospital created successfully",
      hospital,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Hospitals
const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();

    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Hospital By Id
const getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);

    if (!hospital) {
      return res.status(404).json({
        message: "Hospital not found",
      });
    }

    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createHospital,
  getHospitals,
  getHospitalById,
};