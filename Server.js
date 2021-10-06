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

//file
const fileUpload = require('express-fileupload');
app.use(fileUpload())

//require routes 
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const orderRouter = require('./routes/orderRouter')
const categoryRouter = require('./routes/categoryRouter')

// use routers
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/order',orderRouter)
app.use('/category',categoryRouter)



app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    // res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});



//create server
app.listen(port, (error) =>
  error
    ? console.log("can notre run server")
    : console.log(`server run ${port}`)
);
