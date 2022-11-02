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
    async phoneAuthentication(req,res){
        const redis =  createClient()
        await redis.setEx(req.body.phone-email ,3600, rand )
        await axios.post('https://www.raygansms.com/api/smsAPI/SendMessag',{
            Message:'hello',
            Mobiles:["09358999169"],
            SendDateInTimeStamp:new Date().getTime()
        },{headers:{'Authorization':'BasicbGF6eWNvZGVyczoyMjQ1MzcxMg=='}})
    }
    // async logOut(res,req){

    // }
}


module.exports = new LoginRegisterController()