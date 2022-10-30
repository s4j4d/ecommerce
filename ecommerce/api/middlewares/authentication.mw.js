const jwt = require('jsonwebtoken')
const axios = require('axios')
const {createClient} = require('redis')




class Authentication{

     tokenVerify(req,req,next,token,secretkey){
        try{
        const result = jwt.verify(token,secretkey)
        if(result){
            req.user = result
            next()
        }
        else 
            return res.status(400).send({error:'not found '})
        
    }catch(error){
        return res.status(500).send({error:error.message}) 
    }
}

    async phoneAuthentication(){
        const redis =  createClient()
        const rand = '123456'
        await redis.setEx()
        next()
    }
}


module.exports = new Authentication()