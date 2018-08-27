// let getNombre = async() => {
//     // undefined.nombre;
//     // throw new Error('No existe un nombre para ese usuario');
//     return 'Fernando';
// }

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error de ASYNC", err);
// });

// La función async es  igual a que si tuvieramos la siguiente definición de la función
// let getNombre2 = () => {
//     return new Promise((resolve, reject) => {
//         undefined.nombre;
//         resolve('Fernando');
//     })
// }

// getNombre2().then((nombre) => {
//     console.log(nombre);
// }).catch(e => {
//     console.log("Error de ASYNC", e);
// });

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then((mensaje) => {
    console.log(mensaje);
}).catch((e) => {
    console.log('Error de ASYNC', e);
});