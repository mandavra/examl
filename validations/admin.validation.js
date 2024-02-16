const Joi = require("joi");

const addadmin = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};
module.exports = {
    addadmin,
};