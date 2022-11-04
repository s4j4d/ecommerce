"use strict";
const db = require("../database/models");
const bcrypt = require("bcrypt");

class UserService {
  async loginRegister(phoneNumber) {
    // const password = userObj.password
    // const hash = bcrypt.hash(password,10)
    return ([user, created] = await db.User.findOrCreate({
      where: { phone: phoneNumber },
    }));
  }

  async getUserProfile(id) {
    try {
      const userProfile = await db.User.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: db.Profile,
            where: {
              UserId: id,
            },
          },
        ],
      });
      return userProfile;
    } catch (error) {
      return error.message;
    }
  }

  async updateUserProfile(fields, id) {
    db.Profile.update(fields, { where: { UserId: id } });
  }

  async editeProfile(userId) {
    const userProfile = await db.Profile.update({});
  }
}
module.exports = new UserService();
