"use strict";
const {
  getUserProfile,
  updateUserProfile,
} = require("../services/profile.service");

const getProfile = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await getUserProfile(id);
    res.json(user);
  } catch (error) {
    res.json(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = req.body["id"];
    delete req.body.id;
    const fields = req.body;
    await updateUserProfile(fields, id);
    res.send("user updated");
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { getProfile, updateProfile };
