const express = require('express');
let { verificaToken, verificaRolAdmin } = require('../middlewares/authentication');
let app = express();
let Categoria = require('../models/categoria');

// Todas las categorias
app.get('/categoria', verificaToken, (req, res) => {
    Categoria.find({})
        .sort('descripcion')
        .populate('usuario', 'name email')
        .exec((err, categorias) => {
            if (err) {
                return res.status(500)
                    .json({
                        ok: false,
                        err
                    });
            }

            res.json({
                ok: true,
                categorias
            });
        });
});

// Todas categoria por id
app.get('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;

    Categoria.findById(id, (err, categoriaDB) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }
        if (!categoriaDB) {
            return res.status(401)
                .json({
                    ok: false,
                    err: {
                        message: 'El id no existe'
                    }
                });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Crear nueva categoría
app.post('/categoria', verificaToken, (req, res) => {
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }
        if (!categoriaDB) {
            return res.status(400)
                .json({
                    ok: false,
                    err
                });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Actualizar categoría
app.put('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let descCategoria = {
        descripcion: body.descripcion
    };

    Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }
        if (!categoriaDB) {
            return res.status(400)
                .json({
                    ok: false,
                    err
                });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Eliminar categoría
app.delete('/categoria/:id', [verificaToken, verificaRolAdmin], (req, res) => {
    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaDB) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }
        if (!categoriaDB) {
            return res.status(400)
                .json({
                    ok: false,
                    err: {
                        message: 'El id no existe'
                    }
                });
        }

        res.json({
            ok: true,
            message: 'Categoría borrada'
        });
    });
});

module.exports = app;