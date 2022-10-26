'use strict';
const db = require("../database/models")

class UserService {
    
    async getUserProfile(userId){
        try {
            const userProfile = await db.Profile.findOne({
                where : {
                    id : userId
                }
            })
            return userProfile
        } catch (error) {
            
        }
    }

    async editeProfile(userId){
        const userProfile = await db.Profile.update({})
    }

}
module.exports = new UserService()