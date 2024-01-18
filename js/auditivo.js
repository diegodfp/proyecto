// document.addEventListener('DOMContentLoaded', function () {
//     // Verificar si hay un usuario autenticado en localStorage
//     const storedUser = localStorage.getItem('usuarioAutenticado');
  
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       mostrarUsuarioAutenticado(user.id);
//     } else {
//       mostrarBotonIniciarSesion();
//     }
//   });
  
  // function mostrarUsuarioAutenticado(userName) {
  //   // Ocultar el botón de inicio de sesión
  //   const loginButton = document.getElementById('loginButton');
  //   if (loginButton) {
  //     loginButton.style.display = 'none';
  //   }
  
  //   // Mostrar el contenedor del usuario y su nombre
  //   const userContainer = document.getElementById('userContainer');
  //   if (userContainer) {
  //     userContainer.style.display = 'block';
  //   }
  // }
  
  // function mostrarBotonIniciarSesion() {
  //   // Mostrar el botón de inicio de sesión
  //   const loginButton = document.getElementById('loginButton');
  //   if (loginButton) {
  //     loginButton.style.display = 'block';
  //   }
  
  //   // Ocultar el contenedor del usuario
  //   const userContainer = document.getElementById('userContainer');
  //   if (userContainer) {
  //     userContainer.style.display = 'none';
  //   }
  // }