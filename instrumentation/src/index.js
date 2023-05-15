const express = require('express');
const { send } = require('express/lib/response');
const app = express(); //server

//Asignacion de puerto
const port = process.env.PORT || 3000;
//Llamar la app
app.use((req, res) =>{
    res.send('Hi!')
})
//Configuracion
app.set('port', port)

app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});