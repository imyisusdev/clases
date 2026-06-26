// ==========================================
// Clase 4: JS y la Vida de tu Tarjeta
// Guía de práctica para alumnos
// ==========================================

// PASO 1: Selección de Elementos (DOM Selection)
// Usá document.getElementById o document.querySelector para capturar los botones.
// - El botón de saludo tiene el id "btn-saludo"
// - El botón de cambiar tema tiene el id "btn-theme"

// const btnSaludo = ...
// const btnTheme = ...


// PASO 2: Agregar Event Listeners
// Registrá un evento 'click' para cada botón usando el método addEventListener.

// A) Lógica para btnSaludo:
// Cuando se haga click en el botón de saludo, mostrá un alert con un mensaje de bienvenida personalizado.

// btnSaludo.addEventListener('click', () => {
//   // Escribí tu código acá (ej. alert("¡Hola mundo!")):
// });


// B) Lógica para btnTheme:
// Cuando se haga click en el botón de cambiar tema, hacé lo siguiente:
// 1. Alterná la clase "dark-mode" en el elemento body usando classList.toggle.
// 2. Usá un condicional (if / else o classList.contains) para cambiar el texto (textContent) del botón de tema:
//    - Si el body tiene la clase "dark-mode", mostrá el sol (☀️) para permitir volver al modo claro.
//    - Si no la tiene, mostrá la luna (🌙) para indicar que se puede ir a modo oscuro.

// btnTheme.addEventListener('click', () => {
//   // Escribí tu código acá:
// });
