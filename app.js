require('dotenv').config();
const path = require("path")
const express = require("express");
var session = require('express-session')

const app = require("./routes");
// const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")

// users = ["Ashkan", "Asghar", "Gholam"]

// app.get("/", userSession,(req, res) => {
//     return res.render("index", {users, req})
// })

app.get("/",(req, res) => {
    return res.render("index", {req})
})

app.use(
    session({
      secret: '95371e2f-a487-4e22-a9e2-8b6356b85453',
      proxy: true,
      resave: true,
      saveUninitialized: true
    })
  );

app.listen(process.env.PORT, ()=> {
    console.log("app listen on port ", process.env.PORT);
})
