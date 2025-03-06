const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    const html = `<ul> ${allProducts.map(
      (product) => `<li>${product.product_name}</li>`
    )} </ul>`;
    res.send(html);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ productInfo: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { product_name, product_price, isInStock, category } = req.body;
    await Product.create({ product_name, product_price, isInStock, category });
    res.status(201).json({ message: "Product Created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Resource Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Resource Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
