const mongoose = require("mongoose");
const  blogSchema = mongoose.Schema({
    blogdescription: {
    type: String,
    trim: true,
  },
  
  adminid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"adminSchema"
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"userSchema"
  },
  blogdate: {
    type: String,
    trim: true,
  },
});

const blog = mongoose.model("blogSchema",blogSchema);

module.exports =blog;