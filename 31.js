function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

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

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);
    console.log("Operaciones disponibles:");
    console.log("1. Comprobar si es primo");
    console.log("2. Hallar su factorial");
    console.log("3. Imprimir su tabla de multiplicar");
    rl.question('Selecciona una opción: ', (opcion) => {
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                if (esPrimo(numero)) {
                    console.log(numero + " es primo.");
                } else {
                    console.log(numero + " no es primo.");
                }
                break;
            case 2:
                console.log("El factorial de " + numero + " es: " + factorial(numero));
                break;
            case 3:
                console.log("Tabla de multiplicar de " + numero + ":");
                for (let i = 1; i <= 10; i++) {
                    console.log(numero + " x " + i + " = " + (numero * i));
                }
                break;
            default:
                console.log("Opción inválida.");
        }
        rl.close();
    });
});
