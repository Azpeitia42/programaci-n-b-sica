const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (numero1) => {
    rl.question('Introduce el segundo número: ', (numero2) => {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        let count = 0;
        let countPares = 0;
        let sumaImpares = 0;
        console.log("Números naturales entre " + numero1 + " y " + numero2 + ":");
        for (let i = numero1; i <= numero2; i++) {
            console.log(i);
            count++;
            if (i % 2 === 0) {
                countPares++;
            } else {
                sumaImpares += i;
            }
        }
        console.log("Cantidad de números naturales: " + count);
        console.log("Cantidad de números pares: " + countPares);
        console.log("Suma de números impares: " + sumaImpares);
        rl.close();
    });
});
