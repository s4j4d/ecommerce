const jwt = require('jsonwebtoken')
const config = require('../../database/config/config');
const db = require('../../database/models')



class Authentication {

    async tokenVerify(req, res, next) {
        try {
            const token = req.cookies['access-token']
            const verificationResult = jwt.verify(token, config.secretkey)
            const user = await db.User.findOne({
                where: {
                    username: verificationResult.username
                },
                attributes: {
                    exclude: ['password']
                }
            })
            req.user = user
            next()

        } catch (error) {
            return res.send({ error: error.message })
        }
    }
}


module.exports = new Authentication()