//require express
const express = require("express");

//require router
const router = express.Router();

// require model
const Product = require("../model/Product");

//test
router.get("/test", (req, res) => {
  res.send("hello product ");
});


/**
 * @desc : get all product
 * @method : get
 * @path : http://localhost:7000/product/
 * @data : no
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ msg: "list of products", products });
  } catch (error) {
    res.status(400).send({ msg: "can note find product", error });
  }
});


/**
 * @desc : get product by id
 * @method : get
 * @path : http://localhost:7000/product/
 * @data : no
 */
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById({ _id });
    res.status(200).send({ msg: "list of products", product });
  } catch (error) {
    res.status(400).send({ msg: "can note find product", error });
  }
});


/**
 * @desc : get product by category
 * @method : get
 * @path : http://localhost:7000/product/category
 * @data : no
 */
router.get("/category/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.findOne({ categoryId });
    if (!products) {
      return res
        .status(400)
        .send({ msg: "can not find product in this category" });
    }
    res.status(200).send({ msg: "list of products by category", products });
  } catch (error) {
    res.status(400).send({ msg: "can note find product", error });
  }
});


/**
 * @desc : add product
 * @method : post
 * @path : http://localhost:7000/product
 * @data : req.body
 */
router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;

    if (
      !newProduct.name ||
      !newProduct.picture ||
      !newProduct.color ||
      !newProduct.dispo ||
      !newProduct.categoryId
    ) {
      return res.status(400).send({ msg: "all fileds are required" });
    }

    const productToAdd = Product(newProduct);
    await productToAdd.save();
    res.status(200).send({ msg: "add succ", productToAdd });
  } catch (error) {
    res.status(400).send({ msg: "can not add product", error });
  }
});


/**
 * @desc : delete product
 * @method : delete
 * @path : http://localhost:7000/product
 * @data : no
 */
router.delete('/:_id',async (req,res)=>{
  try {
    const{_id}=req.params
    const result = await Product.deleteOne({_id})
    if (result.deletedCount === 0) {
     return res.status(400).send({ msg: "product alredy deleted", error });
   }
   res.status(200).send({msg:"delete succ"})
  } catch (error) {
    res.status(400).send({msg:"can not delete ",error})
  }
})


/**
 * @desc : update product
 * @method : put
 * @path : http://localhost:7000/product
 * @data : req.body
 */

router.put('/:_id',async (req,res)=>{
  try {
    const{_id} = req.params
    const newProduct = req.body
    const result = await Product.updateOne({_id},{$set:{...newProduct}})

    if (!result.acknowledged) {
      return res.status(400).send({ msg: "product schema not confirmed" });
    }
    
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "product alredy updated" });
    }

    res.status(200).send({ msg: "product update succ" });

  } catch (error) {
    return res.status(400).send({ msg: "product not updated" });

  }
})





module.exports = router;
