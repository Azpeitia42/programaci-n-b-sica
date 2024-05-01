function cargarNotas(numCursos, numAlumnosPorCurso) {
    let notas = [];
    for (let i = 0; i < numCursos; i++) {
        notas[i] = [];
        console.log("Curso " + (i + 1) + ":");
        for (let j = 0; j < numAlumnosPorCurso; j++) {
            notas[i][j] = Math.floor(Math.random() * 11); 
        }
        console.log("Notas de los alumnos: " + notas[i].join(', '));
    }
    return notas;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el número de cursos: ', (numCursos) => {
    rl.question('Introduce el número de alumnos por curso: ', (numAlumnosPorCurso) => {
        numCursos = parseInt(numCursos);
        numAlumnosPorCurso = parseInt(numAlumnosPorCurso);
        cargarNotas(numCursos, numAlumnosPorCurso);
        rl.close();
    });
});
