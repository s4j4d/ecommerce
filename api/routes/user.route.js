"use strict";
const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");
const { urlencoded } = require("express");
const { Authentication } = require("../middlewares");

router
  .route("/profile")
  .get(userController.getUserProfile)
  .post(userController.updateProfile);

router.use(urlencoded());
router.get("/", userController.loginRegister);
// router.get('/confirmation', userController.phoneAuthentication)
// router.get('/confirmation' ,Authentication.tokenVerify)

// router.get('/confirmation', Authentication.phoneAuthenticationGet)
// router.post('/confirmation', Authentication.phoneAuthenticationPost)

module.exports = router;
