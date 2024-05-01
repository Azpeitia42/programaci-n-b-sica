function factorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número para calcular su factorial: ', (numero) => {
    numero = parseInt(numero);
    if (numero < 0) {
        console.log("No se puede calcular el factorial de un número negativo.");
    } else {
        console.log("El factorial de " + numero + " es: " + factorial(numero));
    }
    rl.close();
});
