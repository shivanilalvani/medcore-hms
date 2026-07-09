const express = require("express");
const router = express.Router();

const {
  createPatient,
  getPatients,
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN"
  ),
  createPatient
);

router.get(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN"
  ),
  getPatients
);

module.exports = router;