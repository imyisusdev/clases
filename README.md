# 🎓 Plan de Estudios: Introducción a la Programación (`imyisusdev`)

Este documento detalla la estructura y el plan de clases en vivo (vía Meet) para introducir a personas sin conocimientos previos al mundo del desarrollo de software. El objetivo es que experimenten tanto con **Frontend** como con **Backend/Lógica** para descubrir qué rama les apasiona más antes de profundizar.

---

## 🛠️ Herramientas por Clase

| Clase       | Tema                             | Herramienta               | Razón Pedagógica                                                          |
| :---------- | :------------------------------- | :------------------------ | :------------------------------------------------------------------------ |
| **Clase 1** | Conceptos generales              | Diapositivas en Reveal.js | Entender sin programar todavía.                                           |
| **Clase 2** | HTML (Esqueleto)                 | **CodePen**               | Cero instalación. Visualización del renderizado en tiempo real.           |
| **Clase 3** | CSS (Diseño)                     | **CodePen**               | Iteración visual ultrarrápida sin configurar archivos locales.            |
| **Clase 4** | JavaScript (Interactividad)      | **CodePen**               | Ver la relación directa entre el click en un botón y el cambio visual.    |
| **Clase 5** | Lógica de Programación (Consola) | **Replit** (o JSBin)      | Introducción a la terminal, variables, bucles e inputs reales de consola. |

---

## 📚 Plan de Clases Detallado (5 Clases)

### 🧱 Clase 2: HTML y el Esqueleto de tu Bio Card

> **Concepto clave:** Estructurar la información. No es programar, es maquetar.

- **Analogía cotidiana:** Los planos y el esqueleto de una casa. Sin vigas ni paredes, no podés pintar ni amueblar.
- **Contenidos teóricos:**
  - ¿Qué es la Web? Cliente y Servidor (repaso rápido).
  - Etiquetas HTML fundamentales: `<html>`, `<head>`, `<body>`.
  - Estructura semántica (el gran valor de un buen desarrollador): `header`, `main`, `footer`, `article`.
  - Etiquetas de contenido: títulos (`h1`, `h2`), párrafos (`p`), imágenes (`img`) y enlaces (`a`).
- **Proyecto de clase (CodePen):**
  - Escribir el código HTML para una **Bio Card** (tarjeta de presentación).
  - Debe contener: foto de perfil, nombre, breve bío, lista de redes sociales (`imyisusdev` de ejemplo) y un footer.
- **Desafío para el alumno:** Personalizar la tarjeta con sus propios datos y links.

---

### 🎨 Clase 3: CSS y el Estilo Neo-brutalista

> **Concepto clave:** La estética, el Box Model y cómo organizar elementos en pantalla.

- **Analogía cotidiana:** La pintura, la decoración y la distribución de los muebles de la casa.
- **Contenidos teóricos:**
  - ¿Qué es CSS y cómo se conecta con HTML? (Selectores básicos).
  - **El Box Model (Modelo de Cajas):** Relleno (`padding`), Borde (`border`) y Margen (`margin`). _¡Clave para que no se frustren alineando cosas!_
  - Introducción a Flexbox: cómo centrar la tarjeta vertical y horizontalmente de forma moderna.
  - Estética Neo-brutalista (estilo `imyisusdev`): bordes negros gruesos, sombras planas y duras, colores contrastantes sin miedo.
- **Proyecto de clase (CodePen):**
  - Aplicar estilos CSS al esqueleto HTML creado en la clase anterior.
  - Centrar la tarjeta en la pantalla usando Flexbox.
  - Agregar micro-interacciones (efecto `:hover` al pasar el mouse por los enlaces y la tarjeta).
- **Desafío para el alumno:** Jugar con los colores de acento y dejar la tarjeta visualmente lista para presentar.

---

### ⚡ Clase 4: JavaScript y la Vida de tu Tarjeta (¡Y Publicación!)

> **Concepto clave:** Controlar el comportamiento basándonos en eventos del usuario.

- **Analogía cotidiana:** Instalar la instalación eléctrica, luces y sensores de movimiento.
- **Contenidos teóricos:**
  - ¿Qué es JavaScript y para qué sirve en el Frontend?
  - Variables y Constantes (`let`, `const`) como cajas donde guardamos cosas.
  - Funciones: bloques de instrucciones con nombre.
  - **El DOM:** Cómo JS puede leer y modificar lo que está en HTML/CSS.
  - Event Listeners: escuchar cuando el usuario hace un click.
- **Proyecto de clase (CodePen):**
  - Agregar un botón "¡Saludame!" que al hacer click pida el nombre del usuario y le tire un saludo personalizado en pantalla.
  - Crear un interruptor de **Modo Oscuro / Modo Claro** dinámico para la tarjeta.
- **🎉 Cierre & Compartir:** En los últimos 10 minutos, cada alumno guarda su Pen, le da al botón **Share** de CodePen y comparte su enlace interactivo de presentación en el chat del Meet.
- **Desafío para el alumno:** Agregar un segundo botón interactivo (por ejemplo, que cuente cuántas veces hicieron click en sus redes sociales).

---

### 🎮 Clase 5: Lógica en Consola - "Adiviná el Número Secreto"

> **Concepto clave:** Lógica pura, control de flujo y toma de decisiones del computador.

- **Herramienta recomendada:** **Replit** (Node.js) o **JSBin** (pestaña Console). Ambas son online y permiten capturar inputs de texto de forma directa y limpia en una terminal/consola.
- **Analogía cotidiana:** Un juego de adivinanzas con un amigo que te dice "más arriba" o "más abajo".
- **Contenidos teóricos:**
  - Entrada y salida de datos interactivos (`prompt` / consola).
  - Condicionales (`if`, `else if`, `else`) para tomar decisiones lógicas.
  - Ciclos (`while`): repetir el juego hasta que el usuario adivine o se quede sin vidas.
  - Variables acumuladoras y contadores (vidas/intentos restantes).
- **El Proyecto - "Adiviná el Número de imyisusdev":**
  - El computador genera un número aleatorio del 1 al 50.
  - El usuario tiene **5 intentos** para adivinarlo.
  - En cada turno, la consola le pide que ingrese un número:
    - Si es menor: _"¡Casi! El número secreto es más GRANDE."_
    - Si es mayor: _"¡Casi! El número secreto es más CHICO."_
    - Si adivina: _"🏆 ¡Excelente! Sos un crack de la programación. ¡Adivinaste!"_
    - Si se le acaban los intentos: _"💀 Game Over. El número secreto era X. ¡A seguir practicando!"_
- **Desafío para el alumno:** Cambiar el rango de números (de 1 a 100) o darles 7 intentos en lugar de 5 para ajustar la dificultad.

---

## 📈 ¿Cómo ayuda este plan a decidir su trayectoria?

- **Frontend (Clases 2, 3 y 4):** Si al alumno le apasionó la alineación, los colores, las animaciones y ver el resultado visual al instante, su camino es el **Frontend**.
- **Backend / Lógica (Clase 5):** Si al alumno le fascinó pensar en los caminos lógicos, el flujo del juego, cómo interactúa la computadora por debajo y el control de datos sin importarle que solo se vea texto en una consola, su camino es el **Backend / Datos**.
