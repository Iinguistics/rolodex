const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// Fetch all products    
//@route  GET /api/products
const getProducts = asyncHandler(async(req,res)=>{
   
    const products = await Product.find({});
    res.json({ products });
});


// Fetch single product  
//@route  GET /api/products/:id
 const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);

    if(product){
       res.json(product);
    }else{
       res.status(404)
       throw new Error('Product not found')
    }
});


// Delete product
//@route  DELETE api/products/remove/:id
const deleteProduct = asyncHandler(async(req,res)=>{
   const product = await Product.findByIdAndDelete(req.params.id);

   if(!product){
       res.status(404)
       throw new Error('Product not found');

   }else{
       res.json({ product });
   }
});


// Create a product
//@route  POST api/products
const createProduct = asyncHandler(async(req,res)=>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
    });
    
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
 });

module.exports = { getProducts, getProductById, deleteProduct, createProduct }
