/*pre entrega numero 1 de jJAVASCRIPT  
Comision: 47070
Alumno: lucas villalba
Tutor: Facundo Casal
*/





/*let nombre
let apellido
let puntuacion = 0
let bienvenido
*/


bienvenido = prompt('Bienvenido al juego!' + '\n' + '¿quiere empezar a jugar?' + '\n'
    + 'si' + '\n'
    + 'no' + '\n');
    nombre = prompt('¿indique su nombre?');
    apellido = prompt('¿indique su apellido');

    alert('para seleccionar la respuesta, ingrese el numera de la respuesta.')

function saludar(nombre, apellido) {
    alert('hola ' + nombre + ' ' + apellido);
}
saludar(nombre, apellido);
if (bienvenido == 'si') {

    do {
        let respuesta
        do {
            respuesta = prompt('¿quien fue peron?' + '\n'
                + '1 - presidente' + '\n'
                + '2 - ministro de guerra' + '\n'
                + '3 - secretario de trabajo' + '\n'
                + '4 - todos');
        } while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )

        if (respuesta === '4') {
            puntuacion += 1
            console.log('respuesta correcta');
        }
        else {
            alert('respuesta incorrecta');
        };
        do {
            respuesta = prompt('¿Cuándo se creó la ONU?' + '\n'
                + '1 - 1918' + '\n'
                + '2 - 1945' + '\n'
                + '3 - 1989' + '\n'
                + '4 - 1978' + '\n');
            if (respuesta === 2) {
                puntuacion += 1
                console.log('respuesta correcta');
            }
            else {
                alert('respuesta incorrecta');
            }
        }
        while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )
        do {
            respuesta = prompt('¿que jugador marco el golas mas rapido de la historia de un mundial?' + '\n'
                + '1 - Hakan Sukur (Turquía)' + '\n'
                + '2 - Diego Maradona (Argentina)' + '\n'
                + '3 - Adalbert Desu (Rumanía)' + '\n'
                + '4 - Edson Pele (Brasil)' + '\n');
            if (respuesta === '1') {
                puntuacion += 1
                console.log('respuesta correcta');
            }
            else {
                alert('respuesta incorrecta');
            }
        }
        while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )
        do {
            respuesta = prompt('¿Qué célula se encuentra tanto en humanos como en animales?' + '\n'
                + '1 - corazon' + '\n'
                + '2 - querantinocito' + '\n'
                + '3 - neumocitos' + '\n'
                + '4 - neurona' + '\n');
            if (respuesta === '4') {
                puntuacion += 1
                console.log('respuesta correcta');
            }
            else {
                alert('respuesta incorrecta');
            }
        }
        while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )

        do {
            respuesta = prompt('¿Cual es la capital de Noruega?' + '\n'
                + '1 - Helsinski' + '\n'
                + '2 - Oslo' + '\n'
                + '3 - Dublin' + '\n'
                + '4 - Berlin' + '\n');
            if (respuesta === '2') {
                puntuacion += 1
                console.log('respuesta correcta');
            }
            else {
                alert('respuesta incorrecta');
            }
        }
        while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )
        do {
            respuesta = prompt('¿Cuanto es 18+(8x0)x120?' + '\n'
                + '1 - 18' + '\n'
                + '2 - 0' + '\n'
                + '3 - 216' + '\n'
                + '4 - 178' + '\n');
            if (respuesta === '1') {
                puntuacion += 1
                console.log('respuesta correcta');
            }
            else {
                alert('respuesta incorrecta');
            }
        }
        while (
            respuesta != '1' &&
            respuesta != '2' &&
            respuesta != '3' &&
            respuesta != '4'
        )
        switch (puntuacion) {
            case 0:
                alert(`tu puntuacion fue de ${puntuacion}/5. falta estudiar!`);
                break;
            case 1:
                alert(`tu puntuacion fue de ${puntuacion}/5. falta practica`);
                break;
            case 2:
                alert(`tu puntuacion fue de ${puntuacion}/5. segui practicando`);
                break;
            case 3:
                alert(`tu puntuacion fue de ${puntuacion}/5. regular`);
                break;
            case 4:
                alert(`tu puntuacion fue de ${puntuacion}/5. casilo logras!`);
                break;
            case 5:
                alert(`tu puntuacion fue de ${puntuacion}/5. felicitaciones, has completado el juego!`);
                break;
        }
        if (puntuacion = 5) {
            continuar = 'no'

        }
        else {
            continuar = prompt('¿deseas jugar de nuevo? si/no');
        }


    }
    while (continuar == 'si');
} else {
    alert('sera la proxima!');
}













