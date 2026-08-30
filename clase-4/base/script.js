// ==========================================
// Clase 4: JS y la Vida de tu Tarjeta
// Guía de práctica para alumnos
// ==========================================

// PASO 1: Selección de Elementos (DOM Selection)
// Usa document.querySelector para capturar los tres elementos que vamos a manejar.
// - El botón de saludo tiene el id "btn-saludo"
// - El botón de cambiar tema tiene el id "btn-theme"
// - El párrafo vacío donde escribiremos el saludo tiene el id "saludo"

// const btnSaludo = ...
// const btnTheme = ...
// const cajaSaludo = ...


// PASO 2: Agregar Event Listeners
// Registra un evento 'click' para cada botón usando el método addEventListener.

// A) Lógica para btnSaludo:
// 1. Pide el nombre de quien visita la tarjeta con prompt() y guárdalo en una variable.
// 2. Escribe un saludo personalizado dentro de cajaSaludo usando textContent.
//    Recuerda que los textos se unen con el signo +  ->  "Hola, " + nombre + "!"
// 3. Si la persona no escribe nada, muestra un saludo genérico.

// btnSaludo.addEventListener('click', () => {
//   // Escribe tu código aquí:
// });


// B) Lógica para btnTheme:
// Cuando se haga click en el botón de cambiar tema, haz lo siguiente:
// 1. Alterna la clase "dark-mode" en el elemento body usando classList.toggle.
// 2. Usa un condicional (if / else con classList.contains) para cambiar el texto (textContent) del botón de tema:
//    - Si el body tiene la clase "dark-mode", muestra el sol (☀️) para permitir volver al modo claro.
//    - Si no la tiene, muestra la luna (🌙) para indicar que se puede ir a modo oscuro.

// btnTheme.addEventListener('click', () => {
//   // Escribe tu código aquí:
// });
