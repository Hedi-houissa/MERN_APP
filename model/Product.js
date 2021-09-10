//require mongoose 
const mongoose = require('mongoose')

//require schema
const {Schema}=mongoose

const productSchema = new Schema({

    categoryId:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    picture:{
        type : String,
        required : true
    },
    color:{
        type : [],
        required : true
    },
    dispo:{
        type : Number,
        required : true
    }
})


module.exports = Product = mongoose.model('product',productSchema)