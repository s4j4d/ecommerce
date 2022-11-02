'use strict';
// const express = require("express");
// const cookieParser = require('cookie-parser')

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cookieParser());

const routeAPIDefiner = [
    ["/cart", require("./cart.route")],
    ["/user", require("./user.route")],
    ["/product", require("./product.route")],
]

// const routeViewsDefiner = [
//     ["/auth", require("./view/auth")],
// ]

const route = function (app) {
    for (const route of routeAPIDefiner) {
        app.use(`/api${route[0]}`, route[1]);
    }
};

// for(const route of routeViewsDefiner){
//     app.use(route[0], route[1]);
// }


module.exports = route;