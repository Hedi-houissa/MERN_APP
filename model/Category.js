//require mongoose 
const mongoose = require('mongoose')

//require schema
const {Schema}=mongoose


const categorySchema = new Schema({

  
    name:{
        type : String,
        required : true,
        unique : true 
    },
    description:{
        type : String,
        required : true
    }
    

    })

module.exports = Category = mongoose.model('category',categorySchema)