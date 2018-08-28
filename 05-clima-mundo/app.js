const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyApGtY8Fns6r0M4COEhOV8um0anAQtRmjU`)
    .then(resp => {

        let location = resp.data.results[0];
        let coords = location.geometry.location;

        console.log("Dirección:", location.formatted_address);
        console.log("Lat:", coords.lat);
        console.log("Lon:", coords.lng);

    })
    .catch(e => console.log("Error", e));