const express = require("express");
const router = express.Router();

const {
  createBill,
  getBills,
  markBillAsPaid,
} = require("../controllers/billController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  createBill
);

router.get(
  "/",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  getBills
);

router.put(
  "/:id/pay",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  markBillAsPaid
);

module.exports = router;