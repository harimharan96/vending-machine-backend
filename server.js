const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./productModel");
const port = 3000;

app.use(cors());

//db
const db = "mongodb://localhost:27017/vending-machine";
mongoose.connect(db);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

//api
app.use(express.json());
app.listen(port, function () {
  console.log("server running on localhost:" + port);
});

app.get("/", (req, res) => {
  res.send("server connected");
});

app.post("/add-products", async (req, res) => {
  let productData = req.body;
  let product = new Product(productData);
  const newProduct = await product.save();
  res.status(201).json(newProduct);
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});
