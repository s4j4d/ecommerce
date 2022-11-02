'use strict';
const { userService } = require('../services');
const utils = require('../utils')
const axios = require('axios')
const { createClient } = require('redis')

class UserController {

    loginRegister = async (req, res) => {
        try {
            const [user, created] = await userService.loginRegister(req.body.phonenumber)
            const token = utils.tokenGenerator(user)
            res.cookie("access-token", token, { maxAge: 60 * 60 * 1000 })
            return res.redirect('/confirmation')
        } catch (error) {
            return res.render('error', { error: error.message })
        }
    }
    async phoneAuthenticationGet(req, res) {
        const redis = createClient()
        const randString = utils.randStringGenerator(6)
        await redis.setEx(req.body.phone - email, 3600, randString)
        const result = await axios.post('https://ippanel.com/api/select', {
            "op": "send",
            "uname": "lazycoders",
            "pass": "22453712code",
            "message": "hello",
            "from": "5000",
            "to": ["09127374700"],
            "time": new Date().getTime()
        })
    }

    addUser() { }
    getUserProfile() { }
    editeProfile() { }

    addSeller() { }
    getSeller() { }
    editSeller() { }
    removeSeller() { }

}


module.exports = new UserController();