const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    username:{
        type:String,
        trim:true,
    },
    phone:{
        type:String,
        trim:true,
    },
    DOB:{
        type:String,
        trim:true,
    },
    // password:{
    //     type:String,
    //     trim:true,
    // },
    // confirm:{
    //     type:String,
    //     trim:true,
    // },
    
})

signupSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    });

module.exports = mongoose.model('Signup', signupSchema)