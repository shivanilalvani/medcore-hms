const Prescription = require("../models/Prescription");

const createPrescription = async (req, res) => {
  try {
    const prescription =
      await Prescription.create(req.body);

    res.status(201).json({
      message: "Prescription created successfully",
      prescription,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPrescriptions = async (req, res) => {
  try {
    const prescriptions =
      await Prescription.find()
        .populate("patientId")
        .populate("doctorId")
        .populate("medicalRecordId");

    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPrescription,
  getPrescriptions,
};