const Joi = require("joi");

const patientSchema = Joi.object({
  hospitalId: Joi.string().required(),

  userId: Joi.string().required(),

  bloodGroup: Joi.string(),

  emergencyContact: Joi.string(),

  allergies: Joi.string(),

  medicalHistory: Joi.string(),
});

module.exports = {
  patientSchema,
};