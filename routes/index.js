var express = require("express");

var app = express();

var user = 'Pedro';
app.get("/", (req,res) => {

    // res.send("Bienvenido a home"); COMO USO EJS
    //TENGO QUE USAR OTRA COSA COMO:

    res.render('pages/home', {title: 'Home', usuario: user }); //esta es la relación que hay entre index y home
})


app.get("/altas", (req,res) => {
    res.send("Bienvenido a altas");
})


module.exports = app;