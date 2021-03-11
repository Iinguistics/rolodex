const express = require('express');
const router = express.Router();
const { getProducts, getProductById, deleteProduct, createProduct } = require('../controllers/productController');


router.get("/", getProducts);
router.get("/:id", getProductById );
router.delete("/remove/:id", deleteProduct);
router.post("/", createProduct);


module.exports = router;
