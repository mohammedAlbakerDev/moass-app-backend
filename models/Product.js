const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    productImage: String,
    productUnit: String,
    part: {
        type: String,
        required: true,
        enum: ['فتنكس', 'مجاري', 'مرحلة ثانية'],  // Only allow these specific values
        default: 'فتنكس'
    }
});

const Product = mongoose.model("Product", productSchema, "maardsafiadb");

module.exports = Product;