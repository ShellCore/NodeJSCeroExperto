function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));

// Función de flecha
let sumarf = (a, b) => {
    return a + b;
}

console.log(sumarf(10, 20));

// Cuando la función de flecha solamente tiene una línea de código, se
// puede simplificar de la siguiente manera
let sumarf2 = (a, b) => a + b;

console.log(sumarf2(10, 20));

// Función sin argumentos
function saludar() {
    return 'Hola Mundo';
}

console.log(saludar());

// Función de flecha sin argumentos
let saludarf = () => 'Hola Mundo';

console.log(saludarf());

// Función con solo 1 argumento
function saludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludo('Fernando'));

// Función de flecha con solo 1 argumento
let saludof = nombre => `Hola ${nombre}`;

console.log(saludof('Fernando'));