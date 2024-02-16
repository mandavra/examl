const Joi = require("joi");

const addblog = {
  body: Joi.object().keys({
    blogdescription: Joi.string().required().trim(),
    adminid: Joi.string().required().trim(),
    userid: Joi.string().required().trim(),
    blogdate: Joi.string().required().trim(),
  }),
};
module.exports = {
    addblog,
};
