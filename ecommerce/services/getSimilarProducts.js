const db = require('../../models')
const {Product} = db.sequelize



const getSimmialarProduct = async(categoryId)=>{

    const similarProducts = await Product.findAll({
        where:{
            CategoryId:categoryId
        }
    },{
        limit:8
    })

    return similarProducts

}