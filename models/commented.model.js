const mongoose = require("mongoose");
const  commentedSchema = mongoose.Schema({
    commentcontent: {
    type: String,
    trim: true,
  },
  adminid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"adminSchema"
  },
  blogid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"blogSchema"
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"userSchema"
  },
  commenteduser: {
    type: String,
    trim: true,
  },
});

const commented = mongoose.model("commentedSchema",commentedSchema);

module.exports =commented;