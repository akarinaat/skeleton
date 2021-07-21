var config = require("./config");
console.log(config.app.port);

//Estas son las dependencias
var express = require("express");
var morgan = require("morgan");


var index = require("./routes/index");
var admin = require("./routes/admin");
var api = require("./routes/api");

var app = express(); // Aquí inicializo express
app.use(morgan('dev'));
app.set('view engine', 'ejs'); // Aqui le estamos diciendo a express que vamos a usar ejs como una plantilla
app.use(express.static('public'));


app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Aqui abajo es que si el usuario se va a home que vaya a index y use todas esas rutas
//Lo mismo para admin, que vaya a admin y use las rutas de admin
app.use('/', index);
app.use('/admin', admin);
app.use('/api', api);



app.listen(config.app.port,() => {
    console.log(config.app.port);
})