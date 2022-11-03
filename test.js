const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("lazyCoders", "MohamadHasan", "mammad1234", {
  host: "localhost",
  dialect: "postgres",
});

const express = require("express");
const db = require("./database/models");
const app = express();
app.use(express.json());

// const getProfile = async (req, res) => {
//   const { id } = req.body;
//   const user = await db.Profile.findOne({ where: { UserId: id } });
//   res.send(user);
// };

// app.get("/profiles", getProfile);

const updatedFields = async (req, res) => {
  const fields = req.body;
  const id = fields["id"];
  const updatedRows = await db.Profile.update(fields, {
    where: { UserId: id },
  });
  console.log(id, updatedRows);
  res.send("ok");
};

app.patch("/profile", updatedFields);

app.listen(3000, () => console.log("listening to requests on port 3000"));
