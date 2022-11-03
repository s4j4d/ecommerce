require("dotenv").config();
const path = require("path");
const config = require("./config/config");
const express = require("express");

const app = require("./api/routes");
// const app = express();
const profileRouter = require("./api/routes/profile.route");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   return res.render("index", { req });
// });

app.use("/", profileRouter);

app.listen(4000, () => {
  console.log("app listen on port ", 4000);
});
