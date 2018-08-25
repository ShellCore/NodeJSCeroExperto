// Al usar var, la variable se puede volver a instanciar
var name = 'Cíclope';
if (true) {
    var name = 'Xavier';
}
var name = 'Júvilo';

console.log(name);

// Usando let, solamente se permite declarar 1 vez la variable con mismo nombre
// Dentro de if, la variable inicializada con let apunta a otro espacio en
// memoria, por lo tanto no muestra error
let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto';
}

// let nombre = 'Gambito'; // Error de sintaxis, nombre ya ha sido declarada
nombre = 'Gambito';

console.log(nombre);

// Creando la variable i con var, ésta se mantiene instanciada, y no manda error
// al llamarlo en el log
for (var i = 0; i < 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);

// La variable j vive solamente dentro del ciclo for, y al terminar se destruye
// provocando un error al querer consultarlo en el log
for (let j = 0; j < 5; j++) {
    console.log(`j: ${j}`);
}

console.log(j);