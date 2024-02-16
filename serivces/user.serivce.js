const { userSchema } = require("../models");


const adduser = (body) => {
  return userSchema.create(body);
};
const findUser = (email) => {
  return userSchema.findOne({ email: email });
};

const getuser = () => {
  return userSchema.find().populate(admin);
};
const deleteuser = (id) => {
  return userSchema.findByIdAndDelete(id);
};



module.exports = { adduser, getuser, deleteuser,findUser,};
