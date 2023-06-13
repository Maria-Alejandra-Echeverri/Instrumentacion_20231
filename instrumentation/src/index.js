const express = require('express');
const mongoose =  require('mongoose');
const { send } = require('express/lib/response');
const app = express(); //server
require('dotenv').config();

//Asignacion de puerto
const URI = process.env.DB_URI;
const port = process.env.PORT || 3000;
const connection = mongoose.connection;

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use(express.json()); //todo dato que llega es en formato json


//Routes
app.use('/api/waterQ', require('./routes/waterQ.routes'))

//Configuracion
app.set('port', port)


//Conectar a DB
mongoose.connect(URI) //CONEXION A LA DB
.then((db) => console.log('Database is connected'))
.catch((err) => console.error(err));

app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});