function relojDigital(hora, minutos, segundos) {
    const intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                hora++;
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
        console.log(`${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`);
    }, 1000);

    return intervalo;
}

let hora = 0;
let minutos = 0;
let segundos = 0;

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const iniciarReloj = () => {
    console.log('El reloj ha comenzado. Puede ajustar la hora escribiendo "ajustar" seguido de la nueva hora, minutos y segundos.');
    return relojDigital(hora, minutos, segundos);
};

let intervaloReloj = iniciarReloj();

rl.on('line', (input) => {
    const comando = input.split(' ');
    if (comando[0] === 'ajustar' && comando.length === 4) {
        clearInterval(intervaloReloj);
        hora = parseInt(comando[1]);
        minutos = parseInt(comando[2]);
        segundos = parseInt(comando[3]);
        intervaloReloj = iniciarReloj();
    } else {
        console.log('Comando no reconocido. Use "ajustar hora minutos segundos" para ajustar la hora del reloj.');
    }
});

