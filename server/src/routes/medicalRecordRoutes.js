const express = require("express");
const router = express.Router();

const {
  createMedicalRecord,
  getMedicalRecords,
} = require("../controllers/medicalRecordController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "DOCTOR"
  ),
  createMedicalRecord
);

router.get(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "DOCTOR"
  ),
  getMedicalRecords
);

module.exports = router;