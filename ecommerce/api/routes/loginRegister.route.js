const router = require('express').Router()
const { urlencoded } = require('express')
const { LoginRegister } = require('../../controller/index')
const {Authentication} = require('../middlewares')


router.use(urlencoded())
router.get('/', LoginRegister)
router.get('/confirmation' ,Authentication.phoneAuthenticationGet)
router.post('/confirmation',Authentication.phoneAuthenticationPost)
module.exports = router