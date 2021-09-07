// require express
const express = require("express");

// instance of express
app = express();

// require config dotenv
require('dotenv').config()

// create port
const port = process.env.PORT||6000;

// connect to db
const connectDb= require('./config/connectDB')
connectDb()

// body parser middelware
app.use(express.json())

//require routes 
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const panierRouter = require('./routes/panierRouter')
const commandeRouter = require('./routes/commandeRouter')
const categoryRouter = require('./routes/categoryRouter')

// use routers
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/panier',panierRouter)
app.use('/commande',commandeRouter)
app.use('/category',categoryRouter)


//create server
app.listen(port, (error) =>
  error
    ? console.log("can notre run server")
    : console.log(`server run ${port}`)
);
