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
    grammage:{
        type : String,
        required : true
    },
    type:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    dispo:{
        type : Boolean,
        required : true
    },
    price:{
        type : Number,
        required : true
    }
})


module.exports = Product = mongoose.model('product',productSchema)