const mongoose = require('mongoose')
/*const {register } = require('./signup')*/

const registerSchema = new mongoose.Schema({
    crop:{
        type:String,
        trim:true,
    },
    type:{
        type:String,
        trim:true,
    },
    quantity:{
        type:Number,
        trim:true,
    },
    price:{
        type:Number,
        trim:true,
    },
    agent:{
        type:String,
        trim:true,
    },
})

module.exports= mongoose.model('Register',registerSchema)