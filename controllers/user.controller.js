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
    async phoneAuthentication(req, res) {
        const redis = createClient()
        await redis.setEx(req.body.phone - email, 3600, rand)
        await axios.post('https://www.raygansms.com/api/smsAPI/SendMessag', {
            Message: 'hello',
            Mobiles: ["09358999169"],
            SendDateInTimeStamp: new Date().getTime()
        }, { headers: { 'Authorization': 'BasicbGF6eWNvZGVyczoyMjQ1MzcxMg==' } })
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