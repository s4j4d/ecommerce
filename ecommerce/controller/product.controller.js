// const getSimmialarProduct = require('../../service/getSimilarProducts')
const {ProductService} = require('../services')

 class ProductController{
    getProduct = async(req,res)=>{
    const productId = req.params.productId
    
    try{
    // const similarProducts = await getSimmialarProduct(product.CategoryId)
    const product = await ProductService.findProduct(productId)
        console.log(product);
        console.log(product.ProductPictures);
        console.log(product.name);
        console.log(product.ProductDetails[0]);
        // console.log(similarProducts);
    if(!product){
        return res.status(404).send({
            status:'error',
            message:"couldn't find this product!"
        })
    }else{
        return res.render('product.pug' , {product})
    }
    }catch(error){
        console.log(error);
        return res.status(500).send(error.message)
    }
    }
}

module.exports = new ProductController()