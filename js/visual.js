const chk = document.getElementById('chk');
const header = document.querySelector('header');

chk.addEventListener('change', (event) => {
  document.body.classList.toggle('dark', event.target.checked);
  header.classList.toggle('dark', event.target.checked);
});


// SCRIPT MODAL LOGIN

function openModal() {
  document.getElementById('signupModal').style.display = 'block';
}
// animaciones LOGIN
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Función para cerrar el modal
function closeModal() {
  document.getElementById('signupModal').style.display = 'none';
}

document.getElementById('loginButton').addEventListener('click', function () {
  openModal();
});

////////// SCRIPT DE LA PAGINA FORMULARIO /////


function mostrarFormulario() {
  var formularioContainer = document.getElementById("formularioContainer");
  formularioContainer.style.display = "grid";

  // Agrega las siguientes líneas para ajustar las filas de la cuadrícula
  formularioContainer.style.gridRow = "5";  // El formulario ocupa la fila 5
  formularioContainer.style.gridColumn = "1 / -1";  // Ocupa todas las columnas

  // También puedes ajustar el estilo del footer para que aparezca en la fila 6
  var footer = document.querySelector(".footer-test");
  footer.style.gridRow = "6";
}
function cerrarEncuesta() {
  var formularioContainer = document.getElementById("formularioContainer");
  formularioContainer.style.display = "none";


  // También puedes ajustar el estilo del footer para que aparezca en la fila 6
  var footer = document.querySelector(".footer-test");
  footer.style.gridRow = "5";
}

function calificarTest() {
  // Obtén todas las respuestas del formulario
  var respuestas = obtenerRespuestas();
  console.log(respuestas)
  // Verifica si todas las respuestas son "A" o "B"
  if (todasSonIguales(respuestas, "A")) {
      alert("Según tus respuestas, eres una persona Visual.");
  } else if (todasSonIguales(respuestas, "B")) {
      alert("Según tus respuestas, eres una persona Auditiva.");
  } else {
      alert("Tus respuestas no encajan claramente en un patrón específico.");
  }
  cerrarEncuesta()
}

// Función para obtener todas las respuestas del formulario
function obtenerRespuestas() {
  var respuestas = [];
  var preguntas = document.querySelectorAll('input[type="radio"]:checked');

  preguntas.forEach(function (pregunta) {
      respuestas.push(pregunta.value);
  });

  return respuestas;
}

// Función para verificar si todas las respuestas son iguales a un valor específico
function todasSonIguales(array, valor) {
  return array.every(function (elemento) {
      return elemento === valor;
  });
}

// Función para cerrar la encuesta


//// FIN SCRIPT FORMULARIO///