const { ProductModel } = require("../models/Product.model");
const ApiFeatures = require("../utils/apifeature");

// GET ALL PRODUCTS

const getProductsController = async (req, res) => {
  const resultPerPage = 50;
  const apiFeature = new ApiFeatures(ProductModel.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  try {
    // const products = await ProductModel.find();
    const products = await apiFeature.query;
    // console.log(products);
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong!", error: error.message });
  }
};

// GET SINGLE PRODUCT
const getSingleProductController = async (req, res) => {
  const ID = req.params;
  // console.log(ID);
  try {
    const product = await ProductModel.findOne({ _id: ID });
    console.log(product);
    return res.json(product);
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.send({ message: "Something Went Wrong!", error: error.message });
  }
};

// ADD PRODUCTS   --> FOR ADMIN ONLY
const addNewProductController = async (req, res) => {
  const payload = req.body;
  // console.log(req);
  // console.log(payload);
  try {
    req.body.user = req.user.id;
    const newProduct = new ProductModel(payload);

    await newProduct.save();
    return res.status(201).json({
      message: "Product Added Successfully.",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong!", error: error.message });
  }
};

// UPDATE PRODUCT FOR ADMIN ONLY
const updateProductController = async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  try {
    let product = await ProductModel.findById(_id);
    if (!product) {
      return res.status(500).json({
        message: "Product Not Found.",
      });
    }
    product = await ProductModel.findByIdAndUpdate(_id, payload, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res
      .status(200)
      .json({ message: "Product Updated Successfully.", product });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong!", error: error.message });
  }
};

// DELETE PRODUCT FOR ADMIN ONLY

const deleteProductController = async (req, res) => {
  const { _id } = req.params;
  try {
    let product = await ProductModel.findById(_id);
    if (!product) {
      return res.status(404).json({
        message: "Product Not Found.",
      });
    }

    await ProductModel.findByIdAndDelete({ _id });

    return res.status(200).json({ message: "Product Deleted Successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong!", error: error.message });
  }
};

// CRETAE AND UPDATE PRODUCT REVIEW

const productReviewController = async (req, res) => {
  const { rating, comment, productID } = req.body;
  // console.log(req);
  try {
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await ProductModel.findById(productID);

    const isReviewed = product.reviews.find(
      (item) => item.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((item) => {
        if (item.user.toString() === req.user._id.toString()) {
          item.rating = rating;
          item.comment = comment;
        }
      });
    } else {
      product.reviews.push(review);
      product.noOfReviews = product.reviews.length;
    }
    let avg = 0;

    product.reviews.forEach((item) => {
      avg += item.rating;
    });

    product.rating = avg / product.reviews.length;
    await product.save({ validateBeforeSave: false });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong!",
      error: error.message,
    });
  }
};

// GET ALL REVIEWS OF A PRODUCT
const getProductReviewController = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product Not Found.",
      });
    }

    return res.status(200).json({ success: true, reviews: product.reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong!",
      error: error.message,
    });
  }
};

module.exports = {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  updateProductController,
  deleteProductController,
  productReviewController,
  getProductReviewController,
};
