const Joi = require("joi");
const validator = (schema) => (data) =>
  schema.validate(data, { abortEarly: false });

const postUpdateSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  type: Joi.string().required(),
  map_src: Joi.string().required(),
  rating: Joi.number().required(),

});

const updateAndPostValidator = validator(postUpdateSchema);
module.exports = updateAndPostValidator;