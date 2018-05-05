const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const burger = require("./../models/burger.js");

const router = app.get('/', function (req, res) {
    res.render("index", );
});

module.exports = router;
