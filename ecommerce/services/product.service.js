const db = require('../models')
const {Product , ProductPicture , ProductDetail,Seller} = db



class ProductService {
    findProduct = async(productId)=>{
        const product = await Product.findOne({
            where:{
                id:productId
            },
            include:[{model:ProductPicture ,
                    attributes:['url']},{model:ProductDetail,
                    include:[{model:Seller,
                        order:[
                            ['satisfactionrate','DESC']
                        ]
                    }]}]
            })
    
        return product
    }
    
}

module.exports = new ProductService()
