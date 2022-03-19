"use strict";

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./src/routes/home");

//웹 세팅
app.set("views","./src/views");
app.set('view engine',"ejs")
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home);  // use -> 미들웨어를 등롣해주는 메소드

module.exports = app;