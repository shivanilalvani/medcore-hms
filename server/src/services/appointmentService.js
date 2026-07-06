const Appointment = require("../models/Appointment");
const DoctorSchedule = require("../models/DoctorSchedule");

const checkAppointmentConflict = async (
  doctorId,
  appointmentDate,
  appointmentTime
) => {
  const existingAppointment =
    await Appointment.findOne({
      doctorId,
      appointmentDate,
      appointmentTime,
      status: {
        $in: ["PENDING", "CONFIRMED"],
      },
    });

  return existingAppointment;
};

const checkDoctorAvailability = async (
  doctorId,
  dayOfWeek,
  appointmentTime
) => {
  const schedule = await DoctorSchedule.findOne({
    doctorId,
    dayOfWeek,
    isAvailable: true,
  });

  if (!schedule) {
    return false;
  }

  return (
    appointmentTime >= schedule.startTime &&
    appointmentTime <= schedule.endTime
  );
};

module.exports = {
  checkAppointmentConflict,
  checkDoctorAvailability,
};