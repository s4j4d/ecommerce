require('dotenv').config();
const path = require("path")
const config = require('./config');
const express = require("express");

const app = require("./api/routes");
// const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")

app.get("/",(req, res) => {
    return res.render("index", {req})
})

app.listen(config.PORT, ()=> {
    console.log("app listen on port ", config.PORT);
})
