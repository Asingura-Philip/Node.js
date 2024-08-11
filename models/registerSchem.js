const mongoose = require('mongoose')
/*const {register } = require('./signup')*/

const registerSchema = new mongoose.Schema({
    crop:{
        type:String,
        trim:true,
    },
    price:{
        type:String,
        trim:true,
    },
    quantity:{
        type:String,
        trim:true,
    },
    price:{
        type:String,
        trim:true,
    },
    agent:{
        type:String,
        trim:true,
    },
})

module.exports= mongoose.model('Register',registerSchema)