const express = require("express");
const mongoose = require("mongoose");
const ProductModel = require("./productModel");

require("./dbConfig");

const app = express();

// Middleware to parse JSON requrest bodies
app.use(express.json());

// Define a route

// CREATE
app.post("/api/products", async (req, res) => {
  const requestBody = req.body;

  try {
    await ProductModel.create({
      product_name: requestBody.product_name,
      product_price: requestBody.product_price,
      isInStock: requestBody.isInStock,
      category: requestBody.category,
    });
  } catch (err) {
    // Error Handling
  }

  return res.status(201).json({ message: "Product Created" });
});

// FETCH ALL
app.get("/api/products", async (req, res) => {
  const allProducts = await ProductModel.find({});
  // const allProducts = await ProductModel.find({ isInStock: true });

  console.log(allProducts);

  res
    .status(200)
    .json({ message: "Product List Received. Check Terminal Logs" });
});

// FETCH ONE
app.get("/api/products/:id", async (req, res) => {
  const allProducts = await ProductModel.findById(req.params.id);
  console.log(allProducts);

  res
    .status(200)
    .json({ message: "Product List Received. Check Terminal Logs" });
});

// UPDATE ONE
app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({ message: "Product detail got updated." });
});

// DELETE ONE
app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Product detail got deleted." });
});

app.get("/", (request, response) => {
  response.send("Hello, Express!");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
