const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const config = require("config");
const maxFileUpload = config.get("maxFileUpload");
const path = require("path");
const Product = require("../../models/Product");
const User = require("../../models/User");
const checkObjectId = require("../../middleware/checkObjectId");

// @desc      Get single product
// @route     GET /api/product/:id
// @access    Public
router.get("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route   GET /api/products
// @desc    GET filtered products
// @access  Public
router.get("/text/:text", async (req, res) => {
  try {
    const searchText = req.params.text.toLowerCase();
    const products = await Product.find();

    let filtered = [];
    products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(searchText) > -1) {
        filtered.push(product);
      }
    });

    if (filtered.length === 0) {
      res.status(400).send({ msg: "Sorry, phone not found in shop!" });
    } else {
      res.send(filtered);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("SERVER ERROR");
  }
});

// @route   GET /api/products
// @desc    GET all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    let query;
    const reqQuery = { ...req.query };
    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|eq|ne)\b/g,
      (match) => `$${match}`
    );
    query = Product.find(JSON.parse(queryStr));

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 2;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Product.countDocuments();

    const lastPage = Math.ceil(total / limit);
    query = query.skip(startIndex).limit(limit);

    // Executing query
    const results = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    res.json({ data: results, pagination, total, lastPage, page });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("SERVER ERROR");
  }
});

// @route   GET /api/products
// @desc    GET filtered products
// @access  Public
router.get("/", async (req, res) => {
  try {
    let query;
    const reqQuery = { ...req.query };
    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|eq|ne)\b/g,
      (match) => `$${match}`
    );
    query = Product.find(JSON.parse(queryStr));

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }

    const results = await query;

    res.json({ data: results });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("SERVER ERROR");
  }
});

// @route    PUT api/products/like/:id
// @desc     Unlike a product
// @access   Private
router.put(
  "/like/:userId/:productId",
  [auth, checkObjectId("productId"), checkObjectId("userId")],
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      const user = await User.findById(req.params.userId);
      // Check if the product has not yet been liked
      if (product.likes.some((like) => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: "Product already liked!" });
      }

      product.likes.unshift({ user: req.user.id });
      user.likes.unshift({ user: req.user.id, product: product });

      await product.save();
      await user.save();

      return res.json(product.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/products/unlike/:id
// @desc     Unlike a product
// @access   Private
router.put(
  "/unlike/:userId/:productId",
  [auth, checkObjectId("productId"), checkObjectId("userId")],
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      const user = await User.findById(req.params.userId);

      // Check if the product has not yet been liked
      if (!product.likes.some((like) => like.user.toString() === req.user.id)) {
        return res
          .status(400)
          .json({ msg: "Product has not yet been liked by You!" });
      }

      // remove the like
      product.likes = product.likes.filter(
        ({ user }) => user.toString() !== req.user.id
      );

      const id = product._id;

      user.likes = user.likes.filter(
        (product) => product.product.toString() !== id.toString()
      );

      await product.save();
      await user.save();

      return res.json(product.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
// @route    PUT api/products/rate/:userId/:productId
// @desc     Like a product
// @access   Private
router.put(
  "/rate/:userId/:productId",
  [auth, checkObjectId("productId"), checkObjectId("userId")],
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      const user = await User.findById(req.params.userId);

      // Check if the product has already been liked
      const rateUpdate = product.rate.find(
        (r) => r.user.toString() === req.user.id
      );
      if (rateUpdate) {
        product.rate[0].rate = req.body.value;
        await product.save();
        return res.json({ msg: "Product rate updata'ed!" });
      }

      product.rate.unshift({ user: req.user.id, rate: req.body.value });

      await product.save();
      await user.save();

      return res.json(product.rate);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
// @route   PUT /api/products/:id/photo
// @desc    Upload photo for phone
// @access  Private

router.put("/:id/photo", auth, checkObjectId("id"), async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user.role !== "admin") {
    return res.status(400).send("User not authorized to do this action!");
  }
  if (!req.files) {
    return res.status(400).send("Please upload a file!");
  }

  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    const file = req.files.file;

    // Make sure the img is a photo
    if (!file.mimetype.startsWith("image")) {
      return res.status(400).send("Please upload an image file");
    }

    // Check filesize
    if (file.size > config.get("maxFileUpload")) {
      return res
        .stataus()
        .send(
          `Please upload an image less then ${config.get("maxFileUpload")}`
        );
    }

    // Create custom filename
    file.name = `photo_${product._id}${path.parse(file.name).ext}`;

    // Upload file
    await Product.findByIdAndUpdate(id, { image: file.name });

    file.mv(`${config.get("public")}/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(`Problem with file upload`);
      }
    });
    res.status(200).json({ succes: true, data: file.name });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("SERVER ERROR");
  }
});
module.exports = router;
