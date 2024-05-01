function lanzarMoneda() {
    return Math.random() < 0.5 ? "Cara" : "Cruz";
}

console.log("Resultado del lanzamiento: " + lanzarMoneda());
