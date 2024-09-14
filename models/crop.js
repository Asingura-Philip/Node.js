const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
    },
    occupation:{
        type:String,
    },
    address:{
        type:String,
    },

})

module.exports = mongoose.model('Form', formSchema)