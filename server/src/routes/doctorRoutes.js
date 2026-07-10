const express = require("express");
const router = express.Router();

const {
  createDoctor,
  getDoctors,
} = require("../controllers/doctorController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN"
  ),
  createDoctor
);

router.get(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN"
  ),
  getDoctors
);

module.exports = router;