// ? Importamos el archivo config.js
require('./config/config');

const express = require('express');
const app = express();

// ? Importamos el paquete body-parser para procesar la información de una peticion POST
const bodyParser = require('body-parser');


// ! cuando se vean app.use son middleware: son funciones que se van a disparar siempre que se ejecute el codigo
// *parse postman---->   body/x-www-form-urlencoded
// ? con esto to ya se puede mandar informacion el el post y en el postman se configura body, x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/', function(req, res) {
    // res.send('Hello World');
    // * Poedemos enviar la respuesta en formato JSON
    res.json('Hello World');
});

// ! Peticion get(Consultar-Leer)
app.get('/usuario', function(req, res) {
    // * Poedemos enviar la respuesta en formato JSON
    res.json('get Usuario');
});

// ! Peticion post(Crear)
app.post('/usuario', function(req, res) {
    // * El .body es el que que se ejecuta al procesar bodyParser en los middleware
    let body = req.body;

    // * vañidamos el parametro post nombre
    if (body.nombre === undefined) {
        // * Para mandar un estatus de error 
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        // * Si todo esta OK
        res.json({
            body
        });
    }

});

// ! Peticion put(Actualizar) ---> se debe espisificar un aid para actualizar /:id
app.put('/usuario/:id', function(req, res) {
    // * Para recoger un parametro en este caso el id
    let id = req.params.id;

    res.json({
        id
    });
});

// ! Peticion delete(Borrar)
app.delete('/usuario', function(req, res) {
    // * Poedemos enviar la respuesta en formato JSON
    res.json('delete Usuario');
});


/*app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});*/

// ! process.env.PORT es la variable global que se encuantra en config 
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
});