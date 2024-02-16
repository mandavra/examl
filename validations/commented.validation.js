const Joi = require("joi");

const commenteduser = {
  body: Joi.object().keys({
    commenteduser: Joi.string().required().trim(),
    commentcontent: Joi.string().required().trim(),
    adminid: Joi.string().required().trim(),
    blogid: Joi.string().required().trim(),
    userid:Joi.string().required().trim(),
  }),
};
module.exports = {
    commenteduser,
};
