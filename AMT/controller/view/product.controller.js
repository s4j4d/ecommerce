const express = require('express');

const router = express.Router();

const db = require('../../models');



router.get('/all', async (req,res) => {
    try {
        const Products = await db.Product.findAll()
        // return res.render('product-list', {Products, req})
        return res.json(Products);
    } catch (error) {
        console.log(error.message);
    }
}) 
router.get("/category", async (req, res) =>{
    const category = await db.Product.findAll(
        
    )
})

module.exports = router;
