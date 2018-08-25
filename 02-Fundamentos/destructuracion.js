let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

// En lugar de realizar estas declaraciones, se puede realizar la 
// Destructiración de la siguiente manera
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre, apellido, poder } = deadpool;

// Si se requiere llamar a la variable obtenida de otra forma:
// let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);