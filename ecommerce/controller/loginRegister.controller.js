const utils = require('../utils')
const loginRegister = require('../services/loginRegister.service')



class LoginRegisterController{

    register = async(req,res)=>{
    try{

        const token = utils.tokenGenerator(req.user)
        return res.redirect('/confirmation')
    }catch(error){

    }
    }
}


module.exports = new LoginRegisterController()