const db = require('../models/index')
const bcrypt = require('bcrypt')

const loginRegisterController = require('../controller/loginRegister.controller')


class LoginRegisterService{


    async loginRegisterService (phoneNumber){
        // const password = userObj.password
        // const hash = bcrypt.hash(password,10)
        return  [user, created] = await db.User.findOrCreate({
            where: { phone:phoneNumber }
          });
        }   
    // async login(userObj){
    //         const password = userObj.password
    //             const user = db.User.findOne({
    //                 where:{
    //                     username:userObj.username
    //                 }
    //             })
    //             const result = await bcrypt.compare(password , user.password)
    //             return result
    //     }
}





module.exports = new LoginRegisterService()