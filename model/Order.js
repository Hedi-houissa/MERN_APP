//require mongoose 
const mongoose = require('mongoose')

//require schema
const {Schema}=mongoose

const commandeSchema = new Schema({

    date:{
        type : Date ,
        required : true
    },
    avance:{
        type : Number,
        required : true
    },
    situation:{
        type : String,
        required : true
    },
    userId:{
        type : String,
        required : true
    },
    listeProduct:{
        type : [],
        required : true
    },
    total:{
        type : Number,
        required : true
    }


    })

    module.exports = Commande = mongoose.model('comande',commandeSchema)