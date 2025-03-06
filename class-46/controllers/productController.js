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
