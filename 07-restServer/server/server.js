// Biblioteca Express para el manejo de servicios Http
const express = require('express');
const app = express();

// Biblioteca Body-Parser para recuperar json en POST
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

require('./config/config');

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {
    let persona = req.body;

    if (persona.nombre === undefined) {
        res.status(400)
            .json({
                ok: false,
                mensaje: 'El nombre es necesario'
            });
    } else {
        res.json({
            persona
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});