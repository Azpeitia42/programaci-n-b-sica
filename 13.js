let count = 0;
console.log("Múltiplos de 2 o 3 entre 1 y 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
        count++;
    }
}
console.log("Cantidad de números múltiplos de 2 o 3: " + count);
