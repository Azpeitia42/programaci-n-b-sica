function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número mayor o igual que la unidad: ', (numero) => {
    numero = parseInt(numero);
    if (esPrimo(numero)) {
        console.log(numero + " es primo.");
    } else {
        console.log(numero + " no es primo.");
    }
    rl.close();
});
