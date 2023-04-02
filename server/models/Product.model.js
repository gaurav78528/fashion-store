const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = mongoose.Schema({
  colors: {
    type: [
      {
        color: {
          type: String,
          required: true,
        },
        images: [String],
        sizes: [String],
      },
    ],
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  offer: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
});
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
