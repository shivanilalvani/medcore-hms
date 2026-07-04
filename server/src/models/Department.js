const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    headOfDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    location: {
        type: String,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", departmentSchema);