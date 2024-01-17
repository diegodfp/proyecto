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