const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [90, 80, 70, 85, 95, 65, 75, 88, 92, 78];

rl.question('Introduce la nota a buscar: ', (nota) => {
    nota = parseInt(nota);
    if (calificaciones.includes(nota)) {
        console.log("La nota " + nota + " está en la lista.");
    } else {
        console.log("La nota " + nota + " no está en la lista.");
    }
    rl.close();
});
