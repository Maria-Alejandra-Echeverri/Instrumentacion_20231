const express = require('express');
const { send } = require('express/lib/response');
const app = express(); //server
require('dotenv').config();

//Asignacion de puerto
const port = process.env.PORT || 3000;

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
})


//Llamar la app
app.use((req, res) =>{
    res.send('Hi, Im Aleja!')
})
//Configuracion
app.set('port', port)

app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});