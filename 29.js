function tirarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

let count = 0;
for (let i = 0; i < 100; i++) {
    let dado1 = tirarDados();
    let dado2 = tirarDados();
    if (dado1 + dado2 === 10) {
        count++;
    }
}
console.log("Número de veces que la suma es 10: " + count);
