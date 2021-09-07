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
    rest:{
        type : Number,
        required : true
    },
    situation:{
        type : Number,
        required : true
    },
    userId:{
        type : String,
        required : true
    },
    panierId:{
        type : String,
        required : true
    }

    })

    module.exports = Commande = mongoose.model('comande',commandeSchema)