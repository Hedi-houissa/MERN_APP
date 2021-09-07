//require mongoose 
const mongoose = require('mongoose')

//connect db
const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('data base is connected')
    } catch (error) {
        console.log('can note connect date base')
    }
}

module.exports=connectDb