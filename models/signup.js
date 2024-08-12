const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
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
    password:{
        type:String,
        trim:true,
    },
    confirm:{
        type:String,
        trim:true,
    },
    
})

module.exports = mongoose.model('Signup', signupSchema)