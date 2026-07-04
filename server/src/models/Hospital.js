const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    website: {
        type: String,
    },

    city: {
        type: String,
    },

    state: {
        type: String,
    },

    country: {
        type: String,
    },

    postalCode: {
        type: String,
    },
  },
  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hospital", hospitalSchema);