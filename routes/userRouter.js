//require express
const express = require("express");

//require router
const router = express.Router();

//require model
const User = require("../model/User");

//bcrypt require
const bcrypt = require("bcrypt");
//token require
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/isAuth");


const { registerValidator, validation, loginValidator, editValidator, passwordValidator } = require("../middleware/expressVatlidate");

//test
router.get("/test", (req, res) => {
  res.send("hello user ");
});

/**
 * @desc : add user
 * @method : post
 * @path : http://localhost:7000/user/
 * @data : req.body
 */
router.post("/", async (req, res) => {
// router.post("/",registerValidator(),validation, async (req, res) => {
  try {
    const newUser = req.body;
    console.log("new user : ", newUser);

    if (
      !newUser.firstname ||
      !newUser.lastname ||
      !newUser.email ||
      !newUser.phone ||
      !newUser.adresse ||
      !newUser.city ||
      !newUser.postal_code ||
      !newUser.username ||
      !newUser.password
    ) {
      console.log("all filed require");
      return res.status(400).send({ msg: "all fields are required " });
    }

    const userTofind = await User.findOne({ email: newUser.email });
    if (userTofind) {
      console.log("all redy exist");
      window.alert("tous les champs obligatoire ");
      return res.status(400).send({ msg: "User alredy exist !!!" });
    }

    const userToAdd = new User(newUser);
    const salt = 10;
    const hashPassword = await bcrypt.hash(userToAdd.password, salt);
    userToAdd.password = hashPassword;



    console.log("user to add : ", userToAdd);
    await userToAdd.save();

    // token
    const token = jwt.sign({ id: userToAdd._id }, process.env.SECRET_KEY);

    res.status(200).send({ msg: "user add succ", userToAdd, token });
  } catch (error) {
    res.status(400).send({ msg: "can note add new user", error });
  }
});

/**
 * @desc : login user
 * @method : post
 * @path : http://localhost:7000/user/
 * @data : req.body
 */
// router.post("/login",loginValidator(),validation, async (req, res) => {
router.post("/login", async (req, res) => {
  try {
    const newUser = req.body;
    console.log("new user : ", newUser.username, "pass : ", newUser.password);

    if (!newUser.username || !newUser.password) {
      console.log("all filed require");
      return res.status(400).send({ msg: "all fields are required " });
    }
    //verif username
    const userToFind = await User.findOne({ username:newUser.username });
    console.log('user find ' ,userToFind)

    if (!userToFind) {
      return res.status(400).send({ msg: "not find user" });
    }
    const isMatch = await bcrypt.compare(newUser.password, userToFind.password);

    if (!isMatch) {
      return res.status(400).send({ msg: "not match" });
    }

    // token
    const token = jwt.sign({ id: userToFind._id }, process.env.SECRET_KEY);
    res.status(200).send({ msg: "user login succ", userToFind, token });
  } catch (error) {
    res.status(400).send({ msg: "login fail" });
  }
});

/**
 * @desc : get  user
 * @method : get
 * @path : http://localhost:7000/user
 * @data : no
 */

router.get('/current',isAuth,(req,res)=>{
  res.send(req.user)
})



/**
 * @desc : get all user
 * @method : get
 * @path : http://localhost:7000/user
 * @data : no
 */

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "i find users", users });
  } catch (error) {
    res.status(400).send({ msg: "can note find user", error });
  }
});

/**
 * @desc : get one user by id
 * @method : get
 * @path : http://localhost:7000/user/
 * @data : no
 */

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(400).send({ msg: "user not find" });
    }
    res.status(200).send({ msg: "i find user", user });
  } catch (error) {
    res.status(400).send({ msg: "can note find user", error });
  }
});

/**
 * @desc : update user
 * @method : put
 * @path : http://localhost:7000/user/one/
 * @data : no
 */

router.put("/:_id",editValidator(),validation, async (req, res) => {
  try {
    const { _id } = req.params;
    const newUser = req.body;

    const result = await User.updateOne({ _id }, { $set: { ...newUser } });

    if (!result.acknowledged) {
      return res.status(400).send({ msg: "user schema not confirmed" });
    }

    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "user alredy updated" });
    }

    res.status(200).send({ msg: "user update succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update user", error });
  }
});

/**
 * @desc : update user username and password
 * @method : put
 * @path : http://localhost:7000/user/one/
 * @data : no
 */

router.put("/one/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const newUser = req.body;

    if (!newUser.Npassword || !newUser.password) {
      console.log("all filed require");
      return res.status(400).send({ msg: "all fields are required " });
    }
    //verif username
    const userToFind = await User.findById({ _id });
    console.log('user find ' ,userToFind)

    if (!userToFind) {
      return res.status(400).send({ msg: "not find user" });
    }
    const isMatch = await bcrypt.compare(newUser.password, userToFind.password);

    if (!isMatch) {
      window.alert('mot de passe nom conforme')
      return res.status(400).send({ msg: "not match" });
    }

    const salt = 10;
    const hashPassword = await bcrypt.hash(newUser.Npassword, salt);
    newUser.password=hashPassword

    const result = await User.updateOne({ _id }, { $set: { ...newUser } });

    if (!result.acknowledged) {
      return res.status(400).send({ msg: "user schema not confirmed" });
    }

    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "user alredy updated" });
    }
  

    res.status(200).send({ msg: "user update succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update user", error });
  }
});

/**
 * @desc : delete user
 * @method : delete
 * @path : http://localhost:7000/user/one/
 * @data : no
 */
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      return res.status(400).send({ msg: "user alredy deleted", error });
    }
    res.status(200).send({ msg: "user delete" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete user", error });
  }
});

module.exports = router;
