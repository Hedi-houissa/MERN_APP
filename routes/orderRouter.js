//require express
const express = require("express");

//require router
const router = express.Router();

//require model
const Order = require("../model/Order");

//test
router.get("/test", (req, res) => {
  res.send("hello commande ");
});

/**
 * @desc : get all order
 * @method : get
 * @path : http://localhost:7000/ordre/
 * @data : no
 */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send({ msg: "orders :", orders });
  } catch (error) {
    res.status(400).send({ msg: "can not find", error });
  }
});

/**
 * @desc : get order
 * @method : get
 * @path : http://localhost:7000/ordered/
 * @data : no
 */
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const order = await Order.findById({ _id });
    if (!order) {
      return res.status(400).send({ msg: "order not exist" });
    }
    res.status(200).send({ msg: "order find :", order });
  } catch (error) {
    res.status(200).send({ msg: "not find order", error });
  }
});

/**
 * @desc : get order by userId
 * @method : get
 * @path : http://localhost:7000/order/user/
 * @data : no
 */
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const order = await Order.find({ userId });
    if (!order) {
      return res.status(400).send({ msg: "order not exist" });
    }
    res.status(200).send({ msg: "order find :", order });
  } catch (error) {
    res.status(200).send({ msg: "not find order", error });
  }
});

/**
 * @desc : add order
 * @method : post
 * @path : http://localhost:7000/ordered/
 * @data : req.body
 */
router.post("/", async (req, res) => {
  try {
    const newOrder = req.body;

    if (!userId || !listeProduct || !total) {
      return res.status(400).send({ msg: "all fields are required" });
    }

    newOrder.date = new Date();
    newOrder.avance = 0;
    newOrder.situation = "treatment";

    const orderToAdd = Order(newOrder);

    await orderToAdd.save();
    res.status(200).send({ msg: "add succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not add", error });
  }
});

/**
 * @desc : delete order
 * @method : delete
 * @path : http://localhost:7000/ordered/
 * @data : no
 */
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Order.deleteOne({ _id });

    if (result.deletedCount === 0) {
      return res.status(400).send({ msg: "order alredy deleted", error });
    }
    res.status(200).send({ msg: "delete succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
});

/**
 * @desc : update order
 * @method : delete
 * @path : http://localhost:7000/ordered/
 * @data : no
 */
router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const newOrder = req.body;

    const result = await Order.updateOne({ _id }, { $set: { ...newOrder } });

    if (!result.acknowledged) {
      return res.status(400).send({ msg: "order schema not confirmed" });
    }

    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "order alredy updated" });
    }

    res.status(200).send({ msg: "order update succ" });
  } catch (error) {
    return res.status(400).send({ msg: "order can note updated" });
  }
});

module.exports = router;
