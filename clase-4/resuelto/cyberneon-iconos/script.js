// Selección de elementos del DOM
const btnSaludo = document.querySelector('#btn-saludo');
const btnTheme = document.querySelector('#btn-theme');
const cajaSaludo = document.querySelector('#saludo');

// Evento para el botón de saludo: pregunta el nombre y lo escribe en la tarjeta
btnSaludo.addEventListener('click', () => {
  // prompt() abre una ventana y devuelve lo que la persona escribe
  const nombre = prompt('¿Cómo te llamas?');

  // Si escribió algo, saludamos con su nombre; si no, usamos un saludo genérico
  if (nombre) {
    cajaSaludo.textContent = '👋 ¡Hola, ' + nombre + '! Gracias por visitar mi tarjeta.';
  } else {
    cajaSaludo.textContent = '👋 ¡Hola! Gracias por visitar mi tarjeta.';
  }
});

// Evento para el botón de alternar tema (modo claro: esta tarjeta nace oscura, así que invertimos la lógica)
btnTheme.addEventListener('click', () => {
  // Alternamos la clase en el body
  document.body.classList.toggle('light-mode');

  // Cambiamos el emoji según el estado
  if (document.body.classList.contains('light-mode')) {
    btnTheme.textContent = '🌙';
  } else {
    btnTheme.textContent = '☀️';
  }
});
