function matrizTranspuesta(matriz) {
    let transpuesta = [];
    for (let j = 0; j < matriz[0].length; j++) {
        transpuesta[j] = [];
        for (let i = 0; i < matriz.length; i++) {
            transpuesta[j][i] = matriz[i][j];
        }
    }
    return transpuesta;
}

let matriz = [];
for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

console.log("Matriz original:");
console.log(matriz);
console.log("Matriz transpuesta:");
console.log(matrizTranspuesta(matriz));
