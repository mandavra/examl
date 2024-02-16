const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminSchema",
    },
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
    },
    mobile:{
        type:Number,
    }

    
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
