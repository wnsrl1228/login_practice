"use strict";

//모듈
const express = require("express");
const dotenv = require("dotenv");




const app = express();
dotenv.config();


//라우팅
const home = require("./src/routes/home");

//로그
// const accessLogStream = require("./src/config/log");
// const morgan = require('morgan');
// const logger = require("./src/config/logger");

// logger.log("info","helelo");

//웹 세팅
app.set("views","./src/views");
app.set('view engine',"ejs")
app.use(express.static(`${__dirname}/src/public`)); // login.egs와 login.js를 연결

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(morgan("tiny",{stream: logger.stream}));
app.use("/",home);  // use -> 미들웨어를 등롣해주는 메소드

module.exports = app;