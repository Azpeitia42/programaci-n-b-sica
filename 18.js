const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    rl.question('Introduce la letra a contar: ', (letra) => {
        let count = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase.charAt(i).toLowerCase() === letra.toLowerCase()) {
                count++;
            }
        }
        console.log("La letra '" + letra + "' aparece " + count + " veces en la frase.");
        rl.close();
    });
});
