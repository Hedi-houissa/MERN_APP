//require mongoose 
const mongoose = require('mongoose')

//require schema
const {Schema}=mongoose

const panierSchema = new Schema({

    listeProduct:{
        type : [],
        required : true
    },
    total:{
        type : Number,
        required : true
    }
})

module.exports = Panier = mongoose.model('panier',panierSchema)