const jwt = require('jsonwebtoken')
const config = require('./database/config/config');


class Utils {

    tokenGenerator(userObj) {

        return token = jwt.sign({ username: userObj.username }, config.secretkey, { algorithm: 'HS256' }, { expiresIn: '24h' })
    }
}




module.exports = new Utils() 