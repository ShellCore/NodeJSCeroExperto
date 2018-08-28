// Biblioteca Express para el manejo de servicios Http
const express = require('express');
const app = express();

// Biblioteca Body-Parser para recuperar json en POST
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

app.use(require('./routes/usuario'));

// Mongoose (MongoDB connection)
const mongoose = require('mongoose');

require('./config/config');

mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});