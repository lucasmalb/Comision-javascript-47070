/*pre entrega numero 1 de jJAVASCRIPT  
Comision: 47070
Alumno: lucas villalba
Tutor: Facundo Casal*/






let nombre
let apellido
let puntuacion = 0
let bienvenido



bienvenido = prompt('Bienvenido al juego!' + '\n' + '¿quiere empezar a jugar?' + '\n'
    + 'si' + '\n'
    + 'no' + '\n');
    nombre = prompt('¿indique su nombre?');
    apellido = prompt('¿indique su apellido');
    
function saludar(nombre, apellido) {
    alert('hola ' + nombre + ' ' + apellido);
}
saludar(nombre, apellido);
if (bienvenido == 'si') {


    alert('para seleccionar la respuesta, ingrese el numero de la respuesta.')

    do {
        let respuesta
        do {
            respuesta = prompt('¿Que cargos ocupo Juan Domingo Peron ?' + '\n'
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
            respuesta = prompt('¿Que jugador marco el golas mas rapido de la historia de un mundial?' + '\n'
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


/*const pregunta1 = new preguntas
const pregunta2 = pregunta;
const pregunta3 = pregunta;
const pregunta4 = pregunta;
const pregunta5 = pregunta;
/*const nombre = lucas
const apellido = villalba
const puntuacion = 0
const bienvenido = prompt('Bienvenido al juego!' + '\n' + '¿quiere empezar a jugar?' + '\n'
+ 'si' + '\n'
+ 'no' + '\n');
nombre = prompt('¿indique su nombre?');
apellido = prompt('¿indique su apellido');
function saludar (nombre, apellido){
    alert ('hola ' + nombre + ' ' + apellido);
}
saludar(nombre, apellido);
if (bienvenido == 'si') 

        function preguntas (pregunta, respuesta1, respuesta2, respuesta3, respuesta4){
            this.pregunta = pregunta,
            this.respuesta1 = respuesta1,
            this.respuesta2 = respuesta2,
            this.respuesta3 = respuesta3,
            this.respuesta4 = respuesta4
        }
        console.log (preguntas);
        const pregunta1 = new preguntas ('¿que cargos ocupo juan domingo peron?', 'a- secretario de trabajo', 'b- presidente', 'c- ministro de guerra', 'd- todos')
        console.log (pregunta1) 
        const pregunta2 = new preguntas ('¿Cuándo se creó la ONU?', 1918, 1945, 1989, 1978)
        console.log (pregunta2)
        const pregunta3 = new preguntas ('¿Que jugador marco el golas mas rapido de la historia de un mundial?', ' Hakan Sukur (Turquía)', 'Diego Maradona (Argentina)', ' Adalbert Desu (Rumanía)', 'Edson Pele (Brasil)')
        console.log (pregunta3)
        const pregunta4 = new preguntas ('¿Qué célula se encuentra tanto en humanos como en animales?', 'corazon', ' querantinocito', 'neumocitos', 'neurona')
        console.log (pregunta4)
        const pregunta5 = new preguntas ('¿Cual es la capital de Noruega?', 'Oslo', 'Berlin', 'Hensiski', 'kiev')
        console.log (pregunta5)*/