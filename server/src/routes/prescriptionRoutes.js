const express = require("express");
const router = express.Router();

const {
  createPrescription,
  getPrescriptions,
} = require("../controllers/prescriptionController");

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
  createPrescription
);

router.get(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "DOCTOR"
  ),
  getPrescriptions
);

module.exports = router;