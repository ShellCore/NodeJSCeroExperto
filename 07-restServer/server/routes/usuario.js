// Biblioteca Express para el manejo de servicios Http
const express = require('express');
const app = express();

// Encriptación
const bcrypt = require('bcrypt');

// Underscore (validación de parámetros no editables)
const _ = require('underscore');

const Usuario = require('../models/usuario');
const { verificaToken, verificaRolAdmin } = require('../middlewares/authentication');

app.get('/usuario', [verificaToken, verificaRolAdmin], (req, res) => {

    return res.json({
        usuario: req.usuario,
        name: req.usuario.name,
        email: req.usuario.email
    });

    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    Usuario.find({ state: true }, 'name email state') // {} Aqui se puede meter filtro de validación en campos
        .skip(from)
        .limit(limit)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400)
                    .json({
                        ok: false,
                        err
                    });
            }

            Usuario.count({ state: true }, (err, conteo) => { // La validación de campos debe ser la mima del query
                res.json({
                    ok: true,
                    usuarios,
                    count: conteo
                });
            });


        });
});

app.post('/usuario', [verificaToken, verificaRolAdmin], (req, res) => {
    let body = req.body;

    let usuario = new Usuario({
        name: body.name,
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

app.put('/usuario/:id', [verificaToken, verificaRolAdmin], (req, res) => {
    let id = req.params.id;

    let validEditableFields = [
        'name',
        'email',
        'img',
        'role',
        'state'
    ];

    let body = _.pick(req.body, validEditableFields);

    Usuario.findByIdAndUpdate(
        id,
        body, {
            new: true,
            runValidators: true
        },
        (err, usuarioDB) => {
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

// app.delete('/usuario/:id', function(req, res) {
//     let id = req.params.id;
//     Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
//         if (err) {
//             return res.status(400)
//                 .json({
//                     ok: false,
//                     err
//                 });
//         }

//         if (!usuarioBorrado) {
//             return res.status(400)
//                 .json({
//                     ok: false,
//                     err: 'Usuario no encontrado'
//                 });
//         }

//         res.json({
//             ok: true,
//             usuario: usuarioBorrado
//         });
//     });
// });

app.delete('/usuario/:id', [verificaToken, verificaRolAdmin], function(req, res) {
    let id = req.params.id;

    let cambiaEstado = {
        state: false
    };

    Usuario.findByIdAndUpdate(
        id,
        cambiaEstado, { new: true },
        (err, usuarioBorrado) => {
            if (err) {
                return res.status(400)
                    .json({
                        ok: false,
                        err
                    });
            }

            if (!usuarioBorrado) {
                return res.status(400)
                    .json({
                        ok: false,
                        err: 'Usuario no encontrado'
                    });
            }

            res.json({
                ok: true,
                usuario: usuarioBorrado
            });
        });
});

module.exports = app;