const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    isInStock: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook
productSchema.pre("save", function (next) {
  console.log("PRE-SAVE:", this);
  next();
});

// Post-save hook to log a message
productSchema.post("save", function (doc, next) {
  console.log("POST-SAVE:", this);
  next();
});

module.exports = mongoose.model("product", productSchema);
