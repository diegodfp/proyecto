  // Obtiene el objeto del usuario autenticado desde el almacenamiento local
  const usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado'));

  // Actualiza el estado de los botones según la condición dada
  function actualizarEstadoBotones() {
    const buttonModulo1 = document.getElementById('buttonModulo1');
    const buttonModulo2 = document.getElementById('buttonModulo2');
    const buttonModulo3 = document.getElementById('buttonModulo3');

    // Verifica si el usuario está autenticado
    if (!usuarioAutenticado) {
        // Si no está autenticado, deshabilita los botones y muestra el mensaje
        buttonModulo1.disabled = true;
        buttonModulo2.disabled = true;
        buttonModulo3.disabled = true;
        buttonModulo1.title = 'Inicia sesión para acceder al Módulo 1';
    } else {
        // Si está autenticado, verifica la condición y actualiza el estado del botón
        buttonModulo1.disabled = false;
        buttonModulo2.disabled = usuarioAutenticado.notaVisual1 < 3;
        buttonModulo3.disabled = usuarioAutenticado.notaVisual2 < 3;
        // Muestra el mensaje de tooltip
        buttonModulo2.title = usuarioAutenticado.notaVisual1 < 3 ? 'Completa el Módulo 1 primero' : '';
        buttonModulo3.title = (usuarioAutenticado.notaVisual1 < 3 || usuarioAutenticado.notaVisual2 < 3) ? 'Completa los módulos anteriores primero' : '';
    }
}

  // Muestra un mensaje al pasar el cursor sobre el botón
  function mostrarMensaje(idBoton) {
      const boton = document.getElementById(idBoton);
      alert(boton.title);
  }

  // Función simulada que se ejecuta al hacer clic en el botón
  function realizarAccion(idBoton) {
      // Simplemente imprime un mensaje en la consola para simular una acción
      console.log('Botón ' + idBoton + ' clickeado');
  }

  // Inicializa el estado de los botones al cargar la página
  window.onload = function () {
      actualizarEstadoBotones();
  };

  function evaluarModulo1() {
    // Obtiene las respuestas seleccionadas
    const respuesta1 = document.querySelector('input[name="question1"]:checked').value;
    const respuesta2 = document.querySelector('input[name="question2"]:checked').value;
    const respuesta3 = document.querySelector('input[name="question3"]:checked').value;

    // Define las respuestas correctas
    const respuestaCorrecta1 = 'A';
    const respuestaCorrecta2 = 'A';
    const respuestaCorrecta3 = 'B';

    // Inicializa la nota en 0
    let nota = 0;

    // Evalúa las respuestas
    if (respuesta1 === respuestaCorrecta1) {
        nota += 2;
    }
    if (respuesta2 === respuestaCorrecta2) {
        nota += 2;
    }
    if (respuesta3 === respuestaCorrecta3) {
        nota += 1;
    }

 
    let usuarioAutenticado = JSON.parse(localStorage.getItem('usuarioAutenticado')) || {};
    // Actualiza solo el campo notaAudio1
    usuarioAutenticado.notaVisual1 = nota;
    // Almacena el objeto actualizado en el localStorage
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
    // Muestra la nota en la consola (puedes quitar esta línea en la versión final)
    console.log('Nota del Módulo 1:', nota);
    let userId = usuarioAutenticado.id
    console.log(userId)
    actualizarNotaEnServidor(userId, nota);

    // Puedes agregar aquí lógica adicional si es necesario, como mostrar un mensaje al usuario
    if (nota>2.9){
        alert("felicitaciones, paso este modulo. Puedes continuar con el siguiente")
        
      }else{
        alert( "no has superado la evaluacion, pero puedes intentarlo nuevamente")
        
      } 
}

function actualizarNotaEnServidor(userId, nuevaNota) {
    // Supongamos que tienes la URL del servidor JSON Server y la ruta para actualizar usuarios
    const url = `http://localhost:3000/users/${userId}`;

    // Realiza una solicitud PUT para actualizar la información del usuario
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            notaVisual1: nuevaNota
            // Puedes agregar más campos según la estructura de tu usuario
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario actualizado en el servidor:', data);
    })
    .catch(error => {
        console.error('Error al actualizar usuario en el servidor:', error);
    });
}

////////  MODULO 2 ///
function evaluarModulo2() {
    // Obtiene las respuestas seleccionadas
    const respuesta1 = document.querySelector('input[name="question1"]:checked').value;
    const respuesta2 = document.querySelector('input[name="question2"]:checked').value;
    const respuesta3 = document.querySelector('input[name="question3"]:checked').value;

    // Define las respuestas correctas
    const respuestaCorrecta1 = 'A';
    const respuestaCorrecta2 = 'A';
    const respuestaCorrecta3 = 'B';

    // Inicializa la nota en 0
    let nota = 0;

    // Evalúa las respuestas
    if (respuesta1 === respuestaCorrecta1) {
        nota += 2;
    }
    if (respuesta2 === respuestaCorrecta2) {
        nota += 2;
    }
    if (respuesta3 === respuestaCorrecta3) {
        nota += 1;
    }

    usuarioAutenticado.notaVisual2 = nota;
    // Almacena el objeto actualizado en el localStorage
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));

    // Muestra la nota en la consola (puedes quitar esta línea en la versión final)
    console.log('Nota del Módulo 2:', nota);
    let userId = usuarioAutenticado.id
    console.log(userId)
    actualizarNotaEnServidor2(userId, nota);
    // Puedes agregar aquí lógica adicional si es necesario, como mostrar un mensaje al usuario
    if (nota>2.9){
        alert("felicitaciones, paso este modulo. Puedes continuar con el siguiente")
        
      }else{
        alert( "no has superado la evaluacion, pero puedes intentarlo nuevamente")
        
      }
}

function actualizarNotaEnServidor2(userId, nuevaNota) {
    // Supongamos que tienes la URL del servidor JSON Server y la ruta para actualizar usuarios
    const url = `http://localhost:3000/users/${userId}`;

    // Realiza una solicitud PUT para actualizar la información del usuario
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            notaVisual2: nuevaNota
            // Puedes agregar más campos según la estructura de tu usuario
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario actualizado en el servidor:', data);
    })
    .catch(error => {
        console.error('Error al actualizar usuario en el servidor:', error);
    });
}

//// MODULO 3 ////
function evaluarModulo3() {
    // Obtiene las respuestas seleccionadas
    const respuesta1 = document.querySelector('input[name="question1"]:checked').value;
    const respuesta2 = document.querySelector('input[name="question2"]:checked').value;
    const respuesta3 = document.querySelector('input[name="question3"]:checked').value;

    // Define las respuestas correctas
    const respuestaCorrecta1 = 'A';
    const respuestaCorrecta2 = 'A';
    const respuestaCorrecta3 = 'B';

    // Inicializa la nota en 0
    let nota = 0;

    // Evalúa las respuestas
    if (respuesta1 === respuestaCorrecta1) {
        nota += 2;
    }
    if (respuesta2 === respuestaCorrecta2) {
        nota += 2;
    }
    if (respuesta3 === respuestaCorrecta3) {
        nota += 1;
    }
    usuarioAutenticado.notaVisual3 = nota;
    // Almacena el objeto actualizado en el localStorage
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
 

    // Muestra la nota en la consola (puedes quitar esta línea en la versión final)
    console.log('Nota del Módulo 1:', nota);
    let userId = usuarioAutenticado.id
    console.log(userId)
    actualizarNotaEnServidor3(userId, nota);
    // Puedes agregar aquí lógica adicional si es necesario, como mostrar un mensaje al usuario
    if (nota>2.9){
        alert("felicitaciones, paso este modulo. Puedes continuar con el siguiente")
        
      }else{
        alert( "no has superado la evaluacion, pero puedes intentarlo nuevamente")
        
      }
}

function actualizarNotaEnServidor3(userId, nuevaNota) {
    // Supongamos que tienes la URL del servidor JSON Server y la ruta para actualizar usuarios
    const url = `http://localhost:3000/users/${userId}`;

    // Realiza una solicitud PUT para actualizar la información del usuario
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            notaVisual3: nuevaNota
            // Puedes agregar más campos según la estructura de tu usuario
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario actualizado en el servidor:', data);
    })
    .catch(error => {
        console.error('Error al actualizar usuario en el servidor:', error);
    });
}