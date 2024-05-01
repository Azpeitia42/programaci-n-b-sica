const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
    rl.close();
});
