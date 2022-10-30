const db = require('../models/index')
const bcrypt = require('bcrypt')

const loginRegisterController = require('../controller/loginRegister.controller')


class LoginRegisterService{


    async loginRegister (userObj){
        // const password = userObj.password
        // const salt = bcrypt.genSalt(10)
        // const hash = bcrypt.hash(password,salt)
        const [user, created] = await db.User.findOrCreate({
            where: { userObj }
          });
          return created
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