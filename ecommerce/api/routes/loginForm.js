const router = require('express').Router()
const {getLoginForm} = require('../../controller/index')



router.get('/', getLoginForm)


module.exports = router