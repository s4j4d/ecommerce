const express = require('express')
const router = express.Router()
////////////////////////////////////////////////////////
const getProduct = require('../../controller')
const {ProductController} = require('../../controller')


////////////////////////////////////////////////////////
router.get('/:productId' , ProductController.getProduct)



module.exports = router