const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
} = require("../../controllers/profile.controller.js");

router.route("/profile").get(getProfile).patch(updateProfile);

module.exports = router;
