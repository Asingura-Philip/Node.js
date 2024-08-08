const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    NAME:{
        type:String,
        trim:true,
    },
    Password:{
        type:String,
    },
})

module.exports = mongoose.model('Login', loginSchema)