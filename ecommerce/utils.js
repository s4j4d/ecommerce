const jwt = require ('jsonwebtoken')
const config = require('./config/config.js')

class Utils{

    tokenGenerator(userObj){
        
        return token = jwt.sign({username:userObj.username},config.secretkey , { algorithm: 'HS256' } , {expiresIn:'24h'})
    }

    randStringGenerator(length) {
       var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
       var charLength = chars.length;
       var result = '';
       for ( var i = 0; i < length; i++ ) {
          result += chars.charAt(Math.floor(Math.random() * charLength));
       }
       return result;
    }
}


module.exports = new Utils() 