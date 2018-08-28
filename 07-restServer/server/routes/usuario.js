// Biblioteca Express para el manejo de servicios Http
const express = require('express');
const app = express();

// Encriptación
const bcrypt = require('bcrypt');

const Usuario = require('../models/usuario');

app.get('/usuario', (req, res) => {
    res.json('get usuario local!');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    let usuario = new Usuario({
        name: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400)
                .json({
                    ok: false,
                    err
                });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});

module.exports = app;