const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
    }
,
    lastName:{
        type:String,
    },
    email:{
        type:String,

    },
    password:{
        type:String,
    }

    
});

const admin = mongoose.model("adminSchema", adminSchema);

module.exports = admin;
