const Joi = require("joi");

const doctorSchema = Joi.object({
  hospitalId: Joi.string().required(),

  userId: Joi.string().required(),

  departmentId: Joi.string().required(),

  specialization: Joi.string().required(),

  qualification: Joi.string().required(),

  experienceYears: Joi.number().min(0),

  consultationFee: Joi.number().min(0),

  licenseNumber: Joi.string().required(),
});

module.exports = {
  doctorSchema,
};