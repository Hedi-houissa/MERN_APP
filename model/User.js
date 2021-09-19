//require mongoose 
const mongoose = require('mongoose')

//require schema
const {Schema}=mongoose

const userSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true
    },
    adresse : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    postal_code : {
        type : Number,
        required : true
    }

    
})

module.exports = User = mongoose.model('user',userSchema)