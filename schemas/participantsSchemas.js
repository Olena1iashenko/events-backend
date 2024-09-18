import Joi from "joi";

export const createParticipantSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().required(),
  heardAboutEvent: Joi.valid("Social Media", "Friends", "Found myself"),
  event: Joi.string().optional(),
}).messages({
  "object.missing": "Body must have all fields",
});
