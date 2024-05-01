const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
rl.question('Introduce un número: ', (numero) => {
    numeros.push(parseInt(numero));
    rl.question('Introduce otro número: ', (numero) => {
        numeros.push(parseInt(numero));
        rl.question('Introduce otro número: ', (numero) => {
            numeros.push(parseInt(numero));
            rl.question('Introduce otro número: ', (numero) => {
                numeros.push(parseInt(numero));
                rl.question('Introduce otro número: ', (numero) => {
                    numeros.push(parseInt(numero));
                    let mayor = Math.max(...numeros);
                    let menor = Math.min(...numeros);
                    console.log("El mayor número es: " + mayor);
                    console.log("El menor número es: " + menor);
                    rl.close();
                });
            });
        });
    });
});
