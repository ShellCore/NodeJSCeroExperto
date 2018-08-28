const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'cesar morales'
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs');
});

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');

//     let salida = {
//         nombre: 'Cesar',
//         edad: 31,
//         url: req.url
//     }
//     res.send(salida);
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});