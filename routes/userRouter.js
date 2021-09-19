//require express
const express = require("express");

//require router
const router = express.Router();

//require model
const User = require("../model/User");

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
  try {
    const newUser = req.body;
    console.log('new user : ',newUser)

    if (
      !newUser.firstname ||
      !newUser.lastname ||
      !newUser.email ||
      !newUser.phone ||
      !newUser.adresse ||
      !newUser.city ||
      !newUser.postal_code
    ) {
      console.log('all filed require')
      return  res.status(400).send({ msg: "all fields are required " });
       
    }

    const userTofind = await User.findOne({ email: newUser.email });
    if (userTofind) {
      console.log('all redy exist')
      window.alert('tous les champs obligatoire ')
      return res.status(400).send({ msg: "User alredy exist !!!" });
    }
    const userToAdd = new User(newUser);
    console.log('user to add : ', userToAdd)
    await userToAdd.save();
    res.status(200).send({ msg: "user add succ", userToAdd });
  } catch (error) {
    res.status(400).send({ msg: "can note add new user", error });
  }
});
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

router.put("/:_id", async (req, res) => {
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
