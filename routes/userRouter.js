//require express
const express = require('express')

//require router
const router=express.Router()

//require model
const User = require('../model/User')

//test
router.get('/test',(req,res)=>{
    res.send('hello user ')
})


/**
 * @desc : add user
 * @method : post
 * @path : http://localhost:7000/user/
 * @data : req.body
 */
router.post('/',(req,res)=>{
    const newUser = req.body
    const userToAdd = new User(newUser)
    userToAdd.save()
    res.status(200).send({msg:"user add succ",userToAdd})

})





module.exports=router