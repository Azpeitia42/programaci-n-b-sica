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
        let suma = 0;
        console.log("Múltiplos de 2 entre " + numero1 + " y " + numero2 + ":");
        if (numero1 > numero2) {
            console.log("El segundo numero tiene que ser mayor que el primero")
        }
        else{
        for (let i = numero1; i <= numero2; i++) {
            if (i % 2 === 0) {
                console.log(i);
                count++;
                suma += i;
            }
        }
        console.log("Cantidad de múltiplos de 2: " + count);
        console.log("Suma de múltiplos de 2: " + suma);
        }rl.close();
    });
});
