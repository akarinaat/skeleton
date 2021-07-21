var express = require("express");

var app = express();


app.get("/", (req,res) => {

    var items = [
        {name:'node.js',url:'https://nodejs.org/en/'},
        {name:'ejs',url:'https://ejs.co'},
        {name:'expressjs',url:'https://expressjs.com'},
    ]




    res.render("pages/admin", {title: "Admin", items} );
   // res.send("Bienvenido a admin");
})


app.get("/altas", (req,res) => {
    res.send("Bienvenido aadmin altas");
})


module.exports = app;