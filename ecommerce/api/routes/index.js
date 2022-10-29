const express = require('express')
const cors = require('cors')

const path = require('path')
const app = express()
app.set('views', __dirname + '/../../views');
app.set("view engine" , 'pug')

app.use(cors())
app.use(express.json())
const routeViewDefiner = [
    ['/product',require('./product.route')],
    ['/login-form',require('./loginForm')],


]


for(const route of routeViewDefiner){
    app.use(route[0],route[1])
}



module.exports = app