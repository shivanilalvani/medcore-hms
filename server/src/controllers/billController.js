const Bill = require("../models/Bill");

const createBill = async (req, res) => {
  try {
    const bill = await Bill.create(req.body);

    res.status(201).json({
      message: "Bill generated successfully",
      bill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBills = async (req, res) => {
  try {
    const bills = await Bill.find()
      .populate("patientId")
      .populate("appointmentId");

    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const markBillAsPaid = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({
        message: "Bill not found",
      });
    }

    bill.paymentStatus = "PAID";

    await bill.save();

    res.status(200).json({
      message: "Payment recorded successfully",
      bill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBill,
  getBills,
  markBillAsPaid,
};