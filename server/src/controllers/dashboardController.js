const User = require("../models/User");
const Appointment = require("../models/Appointment");
const Bill = require("../models/Bill");

const getDashboardStats = async (req, res) => {
  try {
    const doctors = await User.countDocuments({
      role: "DOCTOR",
    });

    const patients = await User.countDocuments({
      role: "PATIENT",
    });

    const appointments =
      await Appointment.countDocuments();

    const bills = await Bill.find();

    const revenue = bills.reduce(
      (total, bill) =>
        total + bill.totalAmount,
      0
    );

    res.status(200).json({
      doctors,
      patients,
      appointments,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};