// Selección de elementos del DOM
const btnSaludo = document.querySelector('#btn-saludo');
const btnTheme = document.querySelector('#btn-theme');

// Evento para el botón de saludo
btnSaludo.addEventListener('click', () => {
  alert('👋 ¡Hola! Qué bueno tenerte por acá. ¡A programar se ha dicho!');
});

// Evento para el botón de alternar tema (modo claro)
btnTheme.addEventListener('click', () => {
  // Alternamos la clase de modo claro en el body
  document.body.classList.toggle('light-mode');
  
  // Cambiamos el emoji según el estado
  if (document.body.classList.contains('light-mode')) {
    btnTheme.textContent = '🌙';
  } else {
    btnTheme.textContent = '☀️';
  }
});
