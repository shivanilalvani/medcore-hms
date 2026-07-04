const express = require("express");
const router = express.Router();

const {
  createHospital,
  getHospitals,
  getHospitalById,
} = require("../controllers/hospitalController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize("SUPER_ADMIN"),
  createHospital
);

router.get(
  "/",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  getHospitals
);

router.get(
  "/:id",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  getHospitalById
);

module.exports = router;