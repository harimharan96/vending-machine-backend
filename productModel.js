const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: String,
  imgUrl: String,
  price: Number,
  info: String,
});

module.exports = mongoose.model(
  "product",
  productSchema,
  "products-collection"
);
