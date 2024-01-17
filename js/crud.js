document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signupButton = document.getElementById('signupButton');
    const signinForm = document.getElementById('signin-form');
    const signinButton = document.getElementById('signinButton');
  
    signupButton.addEventListener('click', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('user').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      enviarRegistroAlServidor(name, email, password);
  
      signupForm.reset();
    });
  
    signinButton.addEventListener('click', function (e) {
      e.preventDefault();
  
      const user = document.getElementById('iniciarUser').value;  // Cambiado a 'user'
      const password = document.getElementById('iniciarPassword').value;  // Cambiado a 'iniciarPassword'
  
      console.log(user);
      autenticarUsuarioEnServidor(user, password);
  
      signinForm.reset();
  });
  
  });
  
  
  
  function enviarRegistroAlServidor(name, email, password) {
    const url = 'http://localhost:3000/users';
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: name,
        email: email,
        password: password,
        notaVisual1: 0,
        notaVisual2: 0,
        notaVisual3: 0,
        notaAudio1:0 ,
        notaAudio2:0 ,
        notaAudio3:0 
      }),
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error!', error));
  }
let foundUser;
function autenticarUsuarioEnServidor(id, password) {
  const url = `http://localhost:3000/users`;

  fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(users => {
      // Quita la palabra clave 'const' para usar la variable global
      foundUser = users.find(user => user.id === id && user.password === password);

      if (foundUser) {
        console.log('Usuario autenticado');
        mostrarUsuarioAutenticado(foundUser.id);
        closeModal()
        const userInfoString = JSON.stringify(foundUser);
        localStorage.setItem('usuarioAutenticado', userInfoString)
      } else {
          alert('Credenciales erroneas, intente nuevamente');
      }
  })
  .catch(error => console.error('Error!', error)); 
}
function mostrarUsuarioAutenticado(userName) {
  // Ocultar el botón de inicio de sesión
  const loginButton = document.getElementById('loginButton');
  loginButton.style.display = 'none';

  // Mostrar el contenedor del usuario y su nombre
  const userContainer = document.getElementById('userContainer');
  userContainer.style.display = 'block';
  console.log(foundUser)
}

// cerrar modal
function closeModal() {
  const modal = document.getElementById('signupModal');
  modal.style.display = 'none';
}

///// --- MOSTRAR  USUARIO ----//
// Función para mostrar la ventana emergente
// function mostrarVentanaEmergente(userInfo) {
//   console.log(userInfo)
  // // Crear la ventana emergente y establecer propiedades
  // const popupContainer = document.createElement('div');
  // popupContainer.id = 'userPopup';
  // popupContainer.classList.add('modal2');

  // // Agregar contenido a la ventana emergente
  // popupContainer.innerHTML = `
  //   <p><strong><i class="fa-solid fa-user"></i></strong>
  //   <p><strong> ${userInfo.id}</strong></p>
  //   <p><strong>Correo:</strong> ${userInfo.email}</p>
  //   <p><strong>Nota Visual:</strong> ${userInfo.notaVisual1}</p>
  //   <p> <strong>Nota Audio:</strong> ${userInfo.notaAudio1}</p>
  //   <span onclick="cerrarSesion()"> <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</span><br>
  //   <span class="close" onclick="cerrarVentanaEmergente()"> <i class="fa-solid fa-circle-xmark"></i> </span>
  // `;

  // // Agregar la ventana emergente al cuerpo del documento
  // document.body.appendChild(popupContainer);

  // Mostrar la ventana emergente al hacer clic en el botón userButton
  const userButton = document.getElementById('userButton');
  userButton.addEventListener('click', function () {
    // Obtener la información del usuario almacenada en localStorage
    const storedUserInfoString = localStorage.getItem('usuarioAutenticado');
    
    if (storedUserInfoString) {
      const storedUserInfo = JSON.parse(storedUserInfoString);
      
      // Crear la ventana emergente y establecer propiedades
      const popupContainer = document.createElement('div');
      popupContainer.id = 'userPopup';
      popupContainer.classList.add('modal2');
  
      // Agregar contenido a la ventana emergente con la información almacenada
      popupContainer.innerHTML = `
        <p><strong><i class="fa-solid fa-user"></i></strong>
        <p><strong> ${storedUserInfo.id}</strong></p>
        <p><strong>Correo:</strong> ${storedUserInfo.email}</p>
        <p><strong>Nota Visual:</strong> ${storedUserInfo.notaVisual1}</p>
        <p> <strong>Nota Audio:</strong> ${storedUserInfo.notaAudio1}</p>
        <span onclick="cerrarSesion()"> <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</span><br>
        <span class="close" onclick="cerrarVentanaEmergente()"> <i class="fa-solid fa-circle-xmark"></i> </span>
      `;
  
      // Agregar la ventana emergente al cuerpo del documento
      document.body.appendChild(popupContainer);
    }
  });


// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
  const popupContainer = document.getElementById('userPopup');
  if (popupContainer) {
    popupContainer.style.display = 'none';
  }
}
// Función para cerrar la sesión y eliminar la ventana emergente
function cerrarSesion() {
  // Eliminar la ventana emergente si existe
  const popupContainer = document.getElementById('userPopup');
  if (popupContainer) {
    popupContainer.parentNode.removeChild(popupContainer);
  }

  // Mostrar el botón de inicio de sesión
  const loginButton = document.getElementById('loginButton');
  loginButton.style.display = 'block';

  // Ocultar el contenedor del usuario
  const userContainer = document.getElementById('userContainer');
  userContainer.style.display = 'none';
  alert(" Sesion cerrada correctamente")
}

