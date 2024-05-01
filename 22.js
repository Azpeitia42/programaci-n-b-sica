const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    for (let i = 0; i < 5; i++) {
        console.log(' '.repeat(4 * i) + frase);
    }
    rl.close();
});
