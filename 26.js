const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    const longitudTerminal = process.stdout.columns;
    const espacios = " ".repeat((longitudTerminal - frase.length) / 2);
    console.log(espacios + frase);
    rl.close();
});

