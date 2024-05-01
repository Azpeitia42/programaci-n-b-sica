const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce S o N: ', (respuesta) => {
    if (respuesta.toUpperCase() === 'S' || respuesta.toUpperCase() === 'N') {
        console.log("Respuesta válida: " + respuesta.toUpperCase());
    } else {
        console.log("Respuesta inválida.");
    }
    rl.close();
});
