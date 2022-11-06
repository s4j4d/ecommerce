require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const axios = require("axios").default;

const config = require("./database/config/config");
const route = require("./api/routes");
const userRouter = require("./api/routes/user.route");

// dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// trust first proxy for session cookie secure
app.set("trust proxy", 1);

// app.use(
//     session({
//         secret: process.env.SECRET_KEY,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 //oneDay
//         },
//         resave: false,
//         proxy: true,
//         saveUninitialized: true
//     })
// );

// enable session for persistent cart
app.use(
  session({
    // store: new pgSession({
    //     pool: pool,
    //     tableName: 'session'
    // }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
    },
  })
);

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

route(app);

// درخواست پست ایجاد تراکنش
app.use("/buy", async (req, res) => {
  try {
    // ورودی های درخواست ایجاد تراکنش
    let params = {
      headers: {
        "X-API-KEY": process.env.API_KEY,
        "X-SANDBOX": 1,
      },
      method: "post",
      url: "https://api.idpay.ir/v1.1/payment",
      data: {
        order_id: "222",
        amount: "1000",
        callback: process.env.CALLBACK,
        order_id: "2424",
      },
    };

    // درخواست ایجاد تراکنش
    let requestBuy = await axios(params);

    // لاگ اطلاعات تراکنش
    console.log(requestBuy.data);

    // ریدایرکت به صفحه پرداخت
    res.redirect(requestBuy.data.link);
  } catch (err) {
    if (err) {
      return res.status(400).send(err.response.data);
    }
  }
});

// درخواست پست کال بک تراکنش
app.post("/callback", async (req, res) => {
  try {
    console.log(req.body);

    // https://idpay.ir/web-service/v1.1/#ad39f18522 {لیست کد وضعیت تراکنش}

    // تراکنش پرداخت شده
    if (req.body.status == 10) {
      let params = {
        headers: {
          "X-API-KEY": process.env.API_KEY,
          "X-SANDBOX": 1,
        },
        method: "post",
        url: "https://api.idpay.ir/v1.1/payment/verify",
        data: {
          id: req.body.id,
          order_id: req.body.order_id,
        },
      };

      // درخواست تایید تراکنش
      let verifyBuy = await axios(params);

      // اطلاعات تراکنش
      console.log(verifyBuy.data);

      // تایید تراکنش
      if (verifyBuy.data.status == 100) {
        return res.json({
          message: "تراکنش موفق",
          peymnet: verifyBuy.data.payment,
        });
      }
      // تراکنش قبلا پرداخت و تایید شده است
      if (verifyBuy.data.status == 101) {
        return res.json({
          message: "تراکنش قبلا پرداخت و تایید شده است",
          peymnet: verifyBuy.data.payment,
        });
      } else {
        res.json(req.body);
      }
    } else {
      // تراکنش های ناموفق
      res.json({ message: "پرداخت ناموفق", peyment: req.body });
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
});

// app.get('/', function (req, res) {
//     if (req.session.page_views) {
//         req.session.page_views++;
//         res.send("You visited this page " + req.session.page_views + " times");
//     } else {
//         req.session.page_views = 1;
//         res.send("Welcome to this page for the first time!");
//     }
// });

// app.get("/", (req, res) => {
//     req.session.count === undefined ? req.session.count = 0 : req.session.count++
//     req.session.pages = []
//     console.log(req.session.cookie.path);
//     console.log(req.user);
//     return res.render("index", { session: req.session })
// })

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.use("/", userRouter);

app.get("/", (req, res) => {
  return res.render("index", { req });
});

app.listen(config.PORT, () => {
  console.log("app listen on port ", config.PORT);
});
