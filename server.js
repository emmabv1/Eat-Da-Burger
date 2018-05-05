const express = require("express");
const mysql = require("mysql");
const parser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();


const PORT = process.env.PORT || 8080;

const router = require("./controllers/burger_controllers.js");

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
})


