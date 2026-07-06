const Joi = require("joi");

const appointmentSchema = Joi.object({
  hospitalId: Joi.string().required(),

  doctorId: Joi.string().required(),

  patientId: Joi.string().required(),

  appointmentDate: Joi.date().required(),

  appointmentTime: Joi.string().required(),

  notes: Joi.string().allow(""),
});

module.exports = {
  appointmentSchema,
};