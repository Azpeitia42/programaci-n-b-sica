const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [];
let suma = 0;

rl.question('Introduce las calificaciones del alumno en 10 asignaturas (separadas por espacios): ', (input) => {
    calificaciones = input.split(' ').map(Number);
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    let media = suma / calificaciones.length;
    console.log("La media del alumno es: " + media);
    rl.close();
});

