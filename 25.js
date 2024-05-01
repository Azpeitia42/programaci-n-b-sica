function convertirARomano(numero) {
    const romanos = [
        {valor: 1000, simbolo: 'M'},
        {valor: 900, simbolo: 'CM'},
        {valor: 500, simbolo: 'D'},
        {valor: 400, simbolo: 'CD'},
        {valor: 100, simbolo: 'C'},
        {valor: 90, simbolo: 'XC'},
        {valor: 50, simbolo: 'L'},
        {valor: 40, simbolo: 'XL'},
        {valor: 10, simbolo: 'X'},
        {valor: 9, simbolo: 'IX'},
        {valor: 5, simbolo: 'V'},
        {valor: 4, simbolo: 'IV'},
        {valor: 1, simbolo: 'I'}
    ];
    
    let resultado = '';
    for (let i = 0; i < romanos.length; i++) {
        while (numero >= romanos[i].valor) {
            resultado += romanos[i].simbolo;
            numero -= romanos[i].valor;
        }
    }
    return resultado;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número menor de 5000: ', (numero) => {
    numero = parseInt(numero);
    if (numero < 1 || numero >= 5000) {
        console.log("Número fuera de rango.");
    } else {
        console.log("El número " + numero + " en romano es: " + convertirARomano(numero));
    }
    rl.close();
});
