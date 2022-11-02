const utils = require('../utils')
const {loginRegisterService} = require('../services/loginRegister.service')
const axios = require('axios')
const {createClient} = require('redis')
const cookieParser = require('cookie-parser')


class LoginRegisterController{

    loginRegisterController = async(req,res)=>{
    try{
        const [user,created] = await loginRegisterService(req.body.phonenumber)
        const token = utils.tokenGenerator(user)
        res.cookie("access-token", token, { maxAge: 60 * 60 * 1000})
        return res.redirect('/confirmation')
    }catch(error){
        return res.render('error',{error:error.message})
    }
    }
    async phoneAuthenticationGet(req,res){
        const redis =  createClient()
        const randString = utils.randStringGenerator(6)
        await redis.setEx(req.body.phone-email ,3600, randString )
        const result = await axios.post('https://ippanel.com/api/select',{
            "op" : "send",
            "uname" : "lazycoders",
            "pass":  "22453712code",
            "message" : "hello",
            "from": "5000",
            "to" : ["09127374700"],
            "time" : new Date().getTime()
    })
}
    async emailAuthentication(req,res){
    
    
}
    async phoneAuthenticationPost(){}

    async logOut(res,req){
    
    }
}

module.exports = new LoginRegisterController()