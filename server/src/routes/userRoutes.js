const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  deactivateUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Get All Users
router.get(
  "/",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  getUsers
);

// Get User By Id
router.get(
  "/:id",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  getUserById
);

// Deactivate User
router.put(
  "/:id/deactivate",
  protect,
  authorize("SUPER_ADMIN", "HOSPITAL_ADMIN"),
  deactivateUser
);

module.exports = router;