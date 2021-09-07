//require express
const express = require('express')

//require router
const router=express.Router()

//test
router.get('/test',(req,res)=>{
    res.send('hello panier ')
})


module.exports=router