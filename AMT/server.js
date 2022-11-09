require('dotenv').config();
const express = require("express")
const app = require('./routes')
const products = require('./controller');
const path = require('path');
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'pug');

// app.set('views', path.join(__dirname,'./public'))
// app.use(express.static(path.join(__dirname,'public')))




app.listen(process.env.PORT,()=>{
    console.log(`server is listen on ${process.env.PORT}`)
})