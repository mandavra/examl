const { commentedSchema } = require("../models");


const addcommented = (body) => {
  return commentedSchema.create(body);
};
const findcommented = (email) => {
  return commentedSchema.findOne({ email: email });
};

const getcommented = () => {
  return commentedSchema.find().populate(admin).populate(blog).populate(user);
};
const deletecommented = (id) => {
  return commentedSchema.findByIdAndDelete(id);
};



module.exports = { addcommented, getcommented, deletecommented,findcommented,};
