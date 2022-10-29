require('dotenv').config()
const express = require('express')
const path = require('path')
const app = require('./api/routes')
app.use(express.static(path.join(__dirname, "public")))







app.listen(process.env.PORT , ()=>{
    console.log('app listening on port '+ process.env.PORT);
})