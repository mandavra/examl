const { blogSchema } = require("../models");


const addblog = (body) => {
  return blogSchema.create(body);
};
const findblog = (email) => {
  return blogSchema.findOne({ email: email });
};

const getblog = () => {
  return blogSchema.find().populate(admin).populate(user);
};
const deleteblog = (id) => {
  return blogSchema.findByIdAndDelete(id);
};



module.exports = { addblog, getblog, deleteblog,findblog,};
