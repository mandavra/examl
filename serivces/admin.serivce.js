const { adminSchema } = require("../models");

const addadmin = (body) => {
  return adminSchema.create(body);
};
const findadmin = (email) => {
  return adminSchema.findOne({ email: email });
};

const getadmin = () => {
  return adminSchema.find();
};
const deleteadmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};



module.exports = { addadmin, getadmin, deleteadmin,findadmin};
