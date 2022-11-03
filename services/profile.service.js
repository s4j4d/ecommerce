const db = require("../database/models");

const getUserProfile = (id) => {
  const user = db.Profile.findOne({ where: { UserId: id } });
  return user;
};

const updateUserProfile = (fields, id) => {
  db.Profile.update(fields, { where: { UserId: id } });
};

module.exports = { getUserProfile, updateUserProfile };
