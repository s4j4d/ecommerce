const { verify }= require("jsonwebtoken")
const db = require("../models")

const jwtTokenAuthentication = async(req, res, next) => {
    const token = req.headers.authorization || req.cookies["access-token"];
    let verifiedToken;
    if(!token){
        return res.sendStatus(401);
    }else{
        try {
            const jwtToken = token.split(" ")[1];
            verifiedToken = verify(jwtToken, process.env.SECRET_KEY);
            
        } catch (error) {
            return res.status(400).send({
                status: "error",
                message: error.message,
                data: null
            })
        }
    }

    db.User.findOne({
        where: {
            username: verifiedToken.username
        },
       attributes: {
           exclude: ["password"]
       }

    }).then((user) => {
        req.user = user
        next()
    }
    ).catch((error) => {
        res.send({
            status: "error",
            message: error,
            data: null 
        })
    })
}

const userSession = async(req, res, next) => {
    const token = req.cookies["access-token"];
    try {
        verifiedToken = verify(token, process.env.SECRET_KEY);
        req.user = await db.User.findOne({
                    where: {
                            username: verifiedToken.username
                        },
                    attributes: {
                        exclude: ["password"]
                    }})
        req.authenticated = true
    } catch (error) {
        req.user = null;
        req.authenticated = false;
    }
    next();
}



module.exports = {
    jwtTokenAuthentication,
    userSession
}