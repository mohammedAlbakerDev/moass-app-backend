const express = require("express");
const Product = require("../models/Product"); // Import the Product model

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        console.log("Products fetched from DB:", products); // 👈 Add this line for debugging
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error); // 👈 Log errors
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = router;
