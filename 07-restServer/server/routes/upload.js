const express = require('express');
const fileupload = require('express-fileupload');
const app = express();

// Default options
app.use(fileupload());

app.put('/upload', function(req, res) {

    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se ha seleccionado ningún archivo'
                }
            });
    }

    let archivo = req.files.archivo;

    archivo.mv('uploads/filename.jpg', (err) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }

        res.json({
            ok: true,
            message: 'Archivo subio correctamente'
        })
    })
});

module.exports = app;