const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    let count = 0;
    console.log("Múltiplos de 3 hasta el número " + numero + ":");
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0) {
            console.log(i);
            count++;
        }
    }
    console.log("Cantidad de múltiplos de 3: " + count);
    rl.close();
});
