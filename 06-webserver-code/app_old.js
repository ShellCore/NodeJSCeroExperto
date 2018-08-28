const http = require('http');

// Escribir sin express
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Cesar',
        edad: 31,
        url: req.url
    }
    res.write(JSON.stringify(salida));

    // res.write('Hola mundo');
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');