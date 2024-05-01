const fs = require('fs');

function altaRegistro(id, nombre, apellidos, direccion, estado) {
    fs.appendFile('DATOS.DAT', `${id},${nombre},${apellidos},${direccion},${estado}\n`, (err) => {
        if (err) {
            console.error('Error al dar de alta el registro:', err);
            return;
        }
        console.log('Registro añadido correctamente.');
    });
}

altaRegistro(1, 'Juan', 'Pérez', 'Calle 123', 'Activo');
