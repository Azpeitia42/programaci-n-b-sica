const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (num1) => {
    rl.question('Introduce el segundo número: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        console.log("Selecciona una opción:");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        rl.question('Opción: ', (opcion) => {
            opcion = parseInt(opcion);
            switch (opcion) {
                case 1:
                    console.log("La suma es: " + (num1 + num2));
                    break;
                case 2:
                    console.log("La resta es: " + (num1 - num2));
                    break;
                case 3:
                    console.log("La multiplicación es: " + (num1 * num2));
                    break;
                case 4:
                    if (num2 !== 0) {
                        console.log("La división es: " + (num1 / num2));
                    } else {
                        console.log("No se puede dividir por cero.");
                    }
                    break;
                default:
                    console.log("Opción inválida.");
            }
            rl.close();
        });
    });
});
