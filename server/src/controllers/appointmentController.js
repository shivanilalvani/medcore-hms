const Appointment = require("../models/Appointment");
const {
  checkAppointmentConflict,
  checkDoctorAvailability,
} = require("../services/appointmentService");

// Book Appointment
const createAppointment = async (req, res) => {
  try {
    const appointmentDate = new Date(
  req.body.appointmentDate
);

const dayOfWeek = appointmentDate
  .toLocaleDateString("en-US", {
    weekday: "long",
  })
  .toUpperCase();

  const isAvailable =
  await checkDoctorAvailability(
    req.body.doctorId,
    dayOfWeek,
    req.body.appointmentTime
  );

if (!isAvailable) {
  return res.status(400).json({
    message:
      "Doctor is not available during this time",
  });
}

    const conflict =
  await checkAppointmentConflict(
    req.body.doctorId,
    req.body.appointmentDate,
    req.body.appointmentTime
  );

if (conflict) {
  return res.status(400).json({
    message:
      "Doctor already has an appointment at this time",
  });
}

    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctorId")
      .populate("patientId")
      .populate("hospitalId");

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Cancel Appointment
const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    appointment.status = "CANCELLED";

    await appointment.save();

    res.status(200).json({
      message: "Appointment cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Complete Appointment
const completeAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    appointment.status = "COMPLETED";

    await appointment.save();

    res.status(200).json({
      message: "Appointment completed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  cancelAppointment,
  completeAppointment,
};