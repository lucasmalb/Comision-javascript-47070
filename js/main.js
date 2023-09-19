/*pre entrega numero 1 de jJAVASCRIPT  
Comision: 47070
Alumno: lucas villalba
Tutor: Facundo Casal*/



        let puntuacion = 0;
        let respuesta;
        function saludar(nombre, apellido) {
            alert('Hola ' + nombre + ' ' + apellido);
        }
        
        function hacerPregunta(pregunta, respuestas, respuestaCorrecta, verificarRespuesta) {
            
            do {
                respuesta = prompt(pregunta + '\n' + respuestas.join('\n'));
            } while (!respuestaincludes(respuestas, respuesta));
        
            if (verificarRespuesta(respuesta, respuestaCorrecta)) {
                console.log('Respuesta correcta');
                return 1;
            } else {
                alert('Respuesta incorrecta');
                return 0;
            }
        }
        function respuestaincludes (respuestas, respuesta){
            let respuestavalida = false;
            for (let i = 0; i< respuestas.length; i++){
                if (respuesta [i].includes(respuesta)) {
                    respuestavalida = true;
                    break
                }
            }
            console.log (respuestavalida);
            return respuestavalida; 
        
        }
        // Función de orden mayor para verificar respuestas
        function verificarRespuesta(respuesta, respuestaCorrecta) {
            return respuesta === respuestaCorrecta;
        }
        
        const bienvenido = prompt('Bienvenido al juego!\n ¿Quieres empezar a jugar? \n (si/no)');
        if (bienvenido === 'si') {
            const nombre = prompt('Indique su nombre');
            const apellido = prompt('Indique su apellido');
            saludar(nombre, apellido);
        
            const preguntas = [
                {
                    pregunta: '¿Quién fue Perón?',
                    respuestas: ['1 - Presidente', '2 - Ministro de Guerra', '3 - Secretario de Trabajo', '4 - Todos'],
                    respuestaCorrecta: '4'
                },
                {
                    pregunta: '¿Cuándo se creó la ONU?',
                    respuestas: ['1 - 1918', '2 - 1945', '3 - 1989', '4 - 1978'],
                    respuestaCorrecta: '2'
                },
                // Otras preguntas aquí...
            ];
        
            let preguntaActual = 0; // Variable para llevar el seguimiento de la pregunta actual
        
            while (preguntaActual < preguntas.length) {
                puntuacion += hacerPregunta(preguntas[preguntaActual].pregunta, preguntas[preguntaActual].respuestas, preguntas[preguntaActual].respuestaCorrecta, verificarRespuesta);
                preguntaActual++; // Avanzar a la siguiente pregunta
            }
        
            switch (puntuacion) {
                case 0:
                    alert(`Tu puntuación fue de ${puntuacion}/5. Falta estudiar.`);
                    break;
                case 1:
                    alert(`Tu puntuación fue de ${puntuacion}/5. Falta práctica.`);
                    break;
                case 2:
                    alert(`Tu puntuación fue de ${puntuacion}/5. Sigue practicando.`);
                    break;
                case 3:
                    alert(`Tu puntuación fue de ${puntuacion}/5. Regular.`);
                    break;
                case 4:
                    alert(`Tu puntuación fue de ${puntuacion}/5. Casi lo logras.`);
                    break;
                case 5:
                    alert(`Tu puntuación fue de ${puntuacion}/5. ¡Felicitaciones, has completado el juego!`);
                    break;
            }
        
            if (puntuacion !== 5) {
                const continuar = prompt('¿Deseas jugar de nuevo? (si/no)');
                if (continuar === 'si') {
                    puntuacion = 0; // Reiniciar la puntuación
                } else {
                    alert('¡Hasta la próxima!');
                }
            } else {
                alert('¡Hasta la próxima!');
            }
        } else {
            alert('Será la próxima vez. ¡Hasta luego!');
        
        }