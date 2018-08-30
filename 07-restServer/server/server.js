// Biblioteca Express para el manejo de servicios Http
const express = require('express');
const app = express();

// Biblioteca Body-Parser para recuperar json en POST
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

// Configuración global de rutas
app.use(require('./routes/index'));

// Mongoose (MongoDB connection)
const mongoose = require('mongoose');

// Habilitar la carpeta public
const path = require('path');
app.use(express.static(path.resolve(__dirname, '../public')));


require('./config/config');

mongoose.connect(process.env.DB_URL, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});