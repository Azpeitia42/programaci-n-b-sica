const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
console.log("Introduce frases. Para terminar, escribe 'fin'.");
rl.on('line', (input) => {
    if (input.toLowerCase() === 'fin') {
        console.log("Total de frases introducidas: " + count);
        rl.close();
    } else {
        count++;
    }
});
