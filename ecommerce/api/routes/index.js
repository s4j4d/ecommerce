const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.set('views', __dirname + '/../../views');
app.set("view engine" , 'pug')

app.use(cors())
app.use(express.json())
app.use(cookieParser())
const routeViewDefiner = [
    ['/product',require('./product.route')],
    ['/login-register',require('./loginRegister.route')],


]


for(const route of routeViewDefiner){
    app.use(route[0],route[1])
}



module.exports = app