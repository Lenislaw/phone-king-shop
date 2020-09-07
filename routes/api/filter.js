const express = require("express");
const router = express.Router();
const config = require("config");
const path = require("path");
const Product = require("../../models/Product");

// @route   GET /api/products
// @desc    get all products
// @access  Public

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    let brandsArr = [];
    let ramMemorysArr = [];
    let builtinMemoryArr = [];
    let cameraArr = [];
    let dualSimArr = [];
    let pricesArr = [];

    products.forEach((product) => {
      brandsArr.push(product.producent);
      ramMemorysArr.push(product.ramMemory);
      builtinMemoryArr.push(product.builtinMemory);
      cameraArr.push(product.camera);
      dualSimArr.push(product.dualSim);
      pricesArr.push(product.price);
    });

    function compareNumbers(a, b) {
      return a - b;
    }
    ramMemorysArr.sort(compareNumbers);
    builtinMemoryArr.sort(compareNumbers);
    const brands = [...new Set(brandsArr)];
    const ramMemory = [...new Set(ramMemorysArr)];
    const builtinMemory = [...new Set(builtinMemoryArr)];

    const dualSim = [...new Set(dualSimArr)];
    const priceMin = Math.min.apply(Math, pricesArr);
    const priceMax = Math.max.apply(Math, pricesArr);

    const params = {
      brands,
      ramMemory,
      builtinMemory,
      dualSim,
      priceMin,
      priceMax,
    };
    if (!params) {
      res.status(400).send({ msg: "Sorry filters not aviable!" });
    }

    res.json(params);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("SERVER ERROR");
  }
});

module.exports = router;
