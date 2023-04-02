const { ProductModel } = require("../models/Product.model");

const getProductsController = async (req, res) => {
  try {
    const products = await ProductModel.find();
    console.log(products);
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.send({ message: "Something Went Wrong!", error });
  }
};

const getSingleProductController = async (req, res) => {
  const ID = req.params;
  console.log(ID);
  try {
    const product = await ProductModel.findOne({ _id: ID });
    console.log(product);
    return res.json(product);
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.send({ message: "Something Went Wrong!", error });
  }
};
const addNewProductController = async (req, res) => {
  
  const payload = req.body;
  console.log(payload);
  try {
    const newProduct = new ProductModel(payload);
    // console.log(product);
    await newProduct.save();
    return res.json({ message: "Product Added Successfully.", newProduct });
  } catch (error) {
    console.log(error);
    return res.send({ message: "Something Went Wrong!", error });
  }
};
const deleteProductController = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    await ProductModel.findByIdAndDelete({ _id });

    return res.json({ message: "Product Deleted Successfully." });
  } catch (error) {
    console.log(error);
    return res.send({ message: "Something Went Wrong!", error });
  }
};

module.exports = {
  getProductsController,
  getSingleProductController,
  addNewProductController,
  deleteProductController,
};
