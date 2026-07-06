const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  cancelAppointment,
  completeAppointment,
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "RECEPTIONIST"
  ),
  createAppointment
);

router.get(
  "/",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "DOCTOR"
  ),
  getAppointments
);

router.put(
  "/:id/cancel",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "RECEPTIONIST"
  ),
  cancelAppointment
);

router.put(
  "/:id/complete",
  protect,
  authorize(
    "SUPER_ADMIN",
    "HOSPITAL_ADMIN",
    "DOCTOR"
  ),
  completeAppointment
);

module.exports = router;
