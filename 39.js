let tabla = [];
let contador = 1;
for (let pagina = 0; pagina < 3; pagina++) {
    tabla[pagina] = [];
    for (let fila = 0; fila < 4; fila++) {
        tabla[pagina][fila] = [];
        for (let columna = 0; columna < 5; columna++) {
            tabla[pagina][fila][columna] = contador++;
        }
    }
}

console.log("Tabla:");
console.log(tabla);
