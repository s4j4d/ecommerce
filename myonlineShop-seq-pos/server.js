require('dotenv').config();
const path = require("path")
const express = require("express");

const app = express()

app.use(express.json())

// const app = require("./routes");
// app.use(express.static(path.join(__dirname, "public")))

// app.set("view engine", "pug")

// users = ["Ashkan", "Asghar", "Gholam"]

// app.get("/", userSession,(req, res) => {
//     return res.render("index", {users, req})
// })

app.listen(process.env.PORT, ()=> {
    console.log("app listen on port ", process.env.PORT);
})
