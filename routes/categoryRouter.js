//require express
const express = require("express");

//require router
const router = express.Router();

// require model
const Category = require("../model/Category");

//test
router.get("/test", (req, res) => {
  res.send("hello category ");
});

/**
 * @desc : get all category
 * @method : get
 * @path : http://localhost:7000/category/
 * @data : no
 */
router.get("/", async (req, res) => {
  try {
    const listCategory = await Category.find();
    res.status(200).send({ msg: "list of category", listCategory });
  } catch (error) {
    res.status(400).send({ msg: "can not find category", error });
  }
});

/**
 * @desc : get category by id
 * @method : get
 * @path : http://localhost:7000/category/
 * @data : no
 */
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const category = await Category.findById({ _id });
    if (!category) {
      return res.status(400).send({ msg: "can note find this category" });
    }
    res.status(200).send({ msg: "category fin it : ", category });
  } catch (error) {
    res.status(400).send({ msg: "can not find category", error });
  }
});

/**
 * @desc : get category by name
 * @method : get
 * @path : http://localhost:7000/category/name
 * @data : no
 */
router.get("/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.findOne({ name });
    if (!category) {
      return res.status(400).send({ msg: "can note find this category" });
    }
    res.status(200).send({ msg: "category fin it : ", category });
  } catch (error) {
    res.status(400).send({ msg: "can not find category", error });
  }
});

/**
 * @desc : add category
 * @method : post
 * @path : http://localhost:7000/category/
 * @data : req.body
 */
router.post("/", async (req, res) => {
  try {
    const newCategory = req.body;
    if (!newCategory.name || !newCategory.description) {
      return res.status(400).send({ msg: "all fields are require" });
    }
    const categoryToFind = await Category.findOne({ name: newCategory.name });
    if (categoryToFind) {
      return res.status(400).send({ msg: "Name of category alredy exist " });
    }
    const categoryToAdd = Category(newCategory);
    await categoryToAdd.save();
    res.status(200).send({ msg: "add succ", categoryToAdd });
  } catch (error) {
    res.status(400).send({ msg: "can not add category", error });
  }
});

/**
 * @desc : delete category
 * @method : delete
 * @path : http://localhost:7000/category/
 * @data : no
 */
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Category.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(400).send({ msg: "category alredy deleted", error });
    }

    // we need to delete all product in the category and confirm this OR not deleted under delete all products


    res.status(200).send({ msg: "category delete" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete category", error });
  }
});

/**
 * @desc : update category
 * @method : put
 * @path : http://localhost:7000/category/
 * @data : req.body
 */
router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const categoryToPut = req.body;
    const result = await Category.updateOne({_id},{$set:{ ...categoryToPut }});

    if (!result.acknowledged) {
        return res.status(400).send({ msg: "category schema not confirmed" });
      }
      
      if (result.modifiedCount === 0) {
        return res.status(400).send({ msg: "category alredy updated" });
      }
  
      res.status(200).send({ msg: "category update succ" });
  } catch (error) {
    return res.status(400).send({ msg: "category  not uptodate" });

  }
});

module.exports = router;
