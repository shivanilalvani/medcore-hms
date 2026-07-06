const MedicalRecord = require("../models/MedicalRecord");

const createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord =
      await MedicalRecord.create(req.body);

    res.status(201).json({
      message: "Medical record created successfully",
      medicalRecord,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMedicalRecords = async (req, res) => {
  try {
    const records =
      await MedicalRecord.find()
        .populate("patientId")
        .populate("doctorId")
        .populate("appointmentId");

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMedicalRecord,
  getMedicalRecords,
};