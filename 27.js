const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número entre 0 y 10: ', (numero) => {
    numero = parseInt(numero);
    if (numero >= 0 && numero <= 10) {
        console.log("Tabla de multiplicar del " + numero + ":");
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        console.log("Número fuera de rango.");
    }
    rl.close();
});
