function ordenarMatrizPorPrimeraColumna(matriz) {
    let n = matriz.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = matriz[i];
            let j = i;
            while (j >= gap && matriz[j - gap][0] > temp[0]) {
                matriz[j] = matriz[j - gap];
                j -= gap;
            }
            matriz[j] = temp;
        }
    }
    return matriz;
}

let matriz = [
    [4, 2, 6],
    [1, 7, 3],
    [5, 9, 8],
    [3, 1, 0]
];
console.log("Matriz original:");
console.log(matriz);
console.log("Matriz ordenada por la primera columna:");
console.log(ordenarMatrizPorPrimeraColumna(matriz));
