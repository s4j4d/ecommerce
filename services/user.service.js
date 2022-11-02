'use strict';
const db = require("../database/models")
const bcrypt = require('bcrypt')

class UserService {

    async loginRegister(phoneNumber) {
        // const password = userObj.password
        // const hash = bcrypt.hash(password,10)
        return [user, created] = await db.User.findOrCreate({
            where: { phone: phoneNumber }
        });
    }

    async getUserProfile(userId) {
        try {
            const userProfile = await db.Profile.findOne({
                where: {
                    id: userId
                }
            })
            return userProfile
        } catch (error) {

        }
    }

    async editeProfile(userId) {
        const userProfile = await db.Profile.update({})
    }



}
module.exports = new UserService()