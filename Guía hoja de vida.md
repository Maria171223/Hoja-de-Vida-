# Hoja de Vida Web Interactiva: María Acuña

> Conversión a Markdown del ejercicio guiado de Lenguaje de Programación 2. Se adapta el diseño del perfil profesional de María Acuña creando una aplicación web responsive, interactiva y accesible.

<!-- Página PDF 1 -->

E J E R C I C I O G U I A D O PA S O A PA S O
Hoja de Vida Web Interactiva:
María Acuña
HTML semántico, formularios con validación, CSS responsive (Grid y Flexbox), JavaScript DOM,
eventos, localStorage y exportación a PDF, integrados en 7 pasos con comprobaciones
7                                100%                            320+                              15
pasos con punto de control       diseño responsive adaptable     líneas de código final      comprobaciones superadas
Curso: Lenguaje de Programación 2                       Programa: Facultad de Ingenierías
Docente: Luis Alfonso Ayala Isaza                       Versión: Noviembre de 2026

<!-- Página PDF 2 -->

### Presentación

Esta guía acompaña el curso Lenguaje de Programación 2. En este ejercicio guiado usted construirá una aplicación web real —la Hoja de Vida interactiva y responsive de María Acuña (Estudiante de Ingeniería de Sistemas)— integrando HTML semántico, estilos avanzados con variables CSS, layout con Flexbox y CSS Grid, manipulación del DOM, eventos, validación de formularios, persistencia de preferencias con `localStorage` y preparación para impresión a PDF.

7                                   100%                       3
pasos cortos                         responsive (móvil/desktop) archivos: HTML, CSS, JS

### Los 7 pasos

1. Estructura HTML semántica y datos personales · pág. 4
2. Estilos base con CSS y variables de tema · pág. 8
3. Layout responsive con Flexbox y Grid · pág. 11
4. Renderizado dinámico de habilidades con el DOM · pág. 14
5. Formulario de contacto con validación nativa y eventos · pág. 17
6. Persistencia de preferencias (Modo Oscuro) con localStorage · pág. 21
7. Funcionalidad de impresión / exportación a PDF y accesibilidad · pág. 24

---

## Parte I · Antes de empezar

### Objetivo y resultado final

En este ejercicio guiado usted construirá, desde una carpeta vacía, la Hoja de Vida Web de María Acuña: una aplicación web elegante, responsive e interactiva que presenta su perfil profesional, formación académica, datos de contacto, habilidades cargadas dinámicamente, cambio de tema claro/oscuro y envío de mensajes con validación.

**OBJETIVO DE APRENDIZAJE**

Al terminar, usted será capaz de construir un sitio web de presentación profesional aplicando HTML semántico, CSS responsive moderno, manipulación del DOM, persistencia local con `localStorage` y optimización para lectura de pantalla e impresión.

### Requisitos y estructura de carpetas

Estructura final del proyecto:
```text
hoja-de-vida-maria-acuna/
├── index.html                     ← estructura (HTML semántico)
├── css/
│   └── styles.css                 ← presentación y layout (CSS)
└── js/
    └── app.js                     ← comportamiento e interactividad (JavaScript)
```

---

## Parte II · Construcción paso a paso

### PASO 1

### Estructura HTML semántica y datos personales

**CONCEPTO QUE APLICA**

HTML semántico (U2 · S1): Uso de elementos como `<aside>`, `<main>`, `<header>`, `<section>` y `<article>` para delimitar las áreas del documento.

### Código del paso

Cree la carpeta del proyecto y el archivo `index.html`:

**index.html · archivo inicial**

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Hoja de vida profesional de María Acuña - Estudiante de Ingeniería de Sistemas">
  <title>Hoja de Vida · María Acuña</title>
  <!-- PASO 2 · hoja de estilos -->
  <!-- PASO 4 · JavaScript -->
</head>
<body>
  <div class="cv-contenedor">
    
    <!-- Columna Izquierda / Barra Lateral -->
    <aside class="barra-lateral">
      <div class="foto-perfil-contenedor">
        <img src="https://via.placeholder.com/180" alt="Foto de perfil de María Acuña" class="foto-perfil" id="foto-perfil">
      </div>

      <section class="seccion-lateral datos-personales">
        <h2>Información</h2>
        <ul>
          <li><strong>Fecha de nacimiento:</strong> 17/12/2007</li>
          <li><strong>Edad:</strong> 18 años</li>
          <li><strong>Nacionalidad:</strong> Colombiana</li>
        </ul>
      </section>

      <section class="seccion-lateral contacto">
        <h2>Contacto</h2>
        <ul>
          <li>📞 (57) 311 877 48 31</li>
          <li>✉️ mariaacuna495715@gmail.com</li>
          <li>💬 @MaraAcua3</li>
          <li>📍 Caucasia, Antioquia</li>
        </ul>
      </section>

      <section class="seccion-lateral idiomas">
        <h2>Idiomas</h2>
        <ul id="lista-idiomas">
          <li>Español (Nativo)</li>
        </ul>
      </section>

      <section class="seccion-lateral habilidades">
        <h2>Habilidades</h2>
        <ul id="lista-habilidades" class="lista-habilidades">
          <!-- PASO 4 · habilidades dinámicas -->
        </ul>
      </section>
    </aside>

    <!-- Columna Principal / Contenido -->
    <main class="contenido-principal">
      <header class="encabezado-perfil">
        <h1>MARÍA ACUÑA</h1>
        <p class="subtitulo">ESTUDIANTE DE INGENIERÍA DE SISTEMAS</p>
      </header>

      <section class="seccion-principal sobre-mi">
        <h2>SOBRE MÍ</h2>
        <p>
          Soy estudiante de cuarto semestre de Ingeniería de Sistemas, interesada en la tecnología, 
          la programación y el desarrollo de soluciones informáticas. Me considero una persona responsable, 
          creativa, comprometida y con disposición para aprender. Tengo facilidad para trabajar en equipo, 
          adaptarme a nuevos retos y adquirir conocimientos. Busco fortalecer mis habilidades y crecer 
          profesionalmente en el área tecnológica.
        </p>
      </section>

      <section class="seccion-principal educacion">
        <h2>FORMACIÓN ACADÉMICA</h2>
        <article class="item-educacion">
          <h3>CORPORACIÓN UNIVERSITARIA REMINGTON</h3>
          <p class="carrera"><strong>Ingeniería de Sistemas</strong></p>
          <p class="fecha">2025 - Actualmente</p>
          <p class="estado">Cuarto semestre en curso</p>
        </article>
      </section>

      <section class="seccion-principal complementaria">
        <h2>FORMACIÓN COMPLEMENTARIA</h2>
        <article class="item-educacion">
          <h3>SERVICIO NACIONAL DE APRENDIZAJE (SENA)</h3>
          <p class="carrera"><strong>Técnico en Sistemas</strong></p>
          <p class="fecha">[2023 – 2024]</p>
        </article>
      </section>

      <!-- PASO 5 · Formulario de contacto -->
    </main>

  </div>
</body>
</html>
```

**✔ Punto de control**

- [ ] La pestaña del navegador dice "Hoja de Vida · María Acuña".
- [ ] En F12 → Elements se identifican los bloques `<aside>` y `<main>`.

---

### PASO 2

### Estilos base con CSS y variables de tema

**CONCEPTO QUE APLICA**

Variables CSS (`:root`): Definición de la paleta institucional (morados y lilas) en un único lugar para reutilización y mantenibilidad.

### Código del paso

1. En `index.html`, reemplace `<!-- PASO 2 · hoja de estilos -->` por:
```html
<link rel="stylesheet" href="css/styles.css">
```

2. Cree `css/styles.css`:

**css/styles.css · variables y resets**

```css
/* ===== Paso 2 · Estilos base y variables ===== */
:root {
  --morado-oscuro: #4A1E4A;
  --morado-medio: #6B306B;
  --lila-claro: #E6D9ED;
  --lila-fondo: #F3EEF7;
  --blanco: #FFFFFF;
  --texto-oscuro: #2D2D2D;
  --texto-suave: #555555;
  --verde-exito: #0F7B3F;
  --rojo-error: #E3001B;
  --sombra: 0 4px 15px rgba(0, 0, 0, 0.1);
  --radio: 12px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #D6C7DE;
  color: var(--texto-oscuro);
  line-height: 1.6;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.cv-contenedor {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--blanco);
  border-radius: var(--radio);
  box-shadow: var(--sombra);
  overflow: hidden;
  transition: background-color 0.3s;
}

.barra-lateral {
  background-color: var(--lila-claro);
  padding: 2rem;
  transition: background-color 0.3s;
}

.foto-perfil-contenedor {
  text-align: center;
  margin-bottom: 1.5rem;
}

.foto-perfil {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--morado-oscuro);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.seccion-lateral {
  margin-bottom: 1.8rem;
}

.seccion-lateral h2 {
  font-size: 1.1rem;
  color: var(--morado-oscuro);
  border-bottom: 2px solid var(--morado-medio);
  padding-bottom: 4px;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.seccion-lateral ul {
  list-style: none;
}

.seccion-lateral li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.contenido-principal {
  padding: 2.5rem;
  background-color: var(--blanco);
  transition: background-color 0.3s;
}

h1 {
  font-size: 2.4rem;
  color: var(--morado-oscuro);
  letter-spacing: 1px;
}

.subtitulo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--morado-medio);
  margin-bottom: 1.5rem;
}

.seccion-principal {
  margin-bottom: 2rem;
}

.seccion-principal h2 {
  font-size: 1.3rem;
  color: var(--morado-oscuro);
  border-bottom: 2px solid var(--lila-claro);
  padding-bottom: 5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.item-educacion {
  margin-bottom: 1rem;
}

.item-educacion h3 {
  font-size: 1.05rem;
  color: var(--morado-medio);
}
```

**✔ Punto de control**

- [ ] Los colores morados y lilas se aplican correctamente en títulos y barra lateral.

---

### PASO 3

### Layout responsive con Flexbox y Grid

**CONCEPTO QUE APLICA**

CSS Grid (U2 · S2): Disposición en dos columnas en pantallas superiores a 768px y de una sola columna en pantallas móviles.

### Código del paso

Agregue al final de `css/styles.css`:

**css/styles.css · agregar al final**

```css
/* ===== Paso 3 · Layout responsive ===== */
.cv-contenedor {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .cv-contenedor {
    grid-template-columns: 320px 1fr;
  }
}
```

**✔ Punto de control**

- [ ] Al cambiar el tamaño del navegador por debajo de 768px, el diseño cambia a una sola columna responsiva.

---

### PASO 4

### Mostrar los datos con el DOM (Renderizado de Habilidades)

**CONCEPTO QUE APLICA**

Manipulación del DOM (U2 · S2): Inserción dinámica de contenido desde un arreglo de datos JS en lugar de escribirlo estáticamente en HTML.

### Código del paso

1. En `index.html`, reemplace `<!-- PASO 4 · JavaScript -->` por:
```html
<script src="js/app.js" defer></script>
```

2. Cree el archivo `js/app.js`:

**js/app.js · render dinámico**

```javascript
'use strict';

// ===== 1. Datos del Perfil (Habilidades) =====
const habilidades = [
  "Trabajo en equipo.",
  "Resolución de problemas.",
  "Comunicación efectiva.",
  "Creatividad e innovación.",
  "Adaptabilidad y aprendizaje continuo.",
  "Organización y responsabilidad.",
  "Manejo de herramientas tecnológicas."
];

// ===== 2. Renderizado Dinámico de Habilidades =====
function renderizarHabilidades() {
  const contenedor = document.querySelector('#lista-habilidades');
  if (!contenedor) return;
  
  contenedor.innerHTML = '';
  habilidades.forEach((habilidad) => {
    const li = document.createElement('li');
    li.textContent = `• ${habilidad}`;
    contenedor.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarHabilidades();
});
```

**✔ Punto de control**

- [ ] Las 7 habilidades descritas en la foto se listan dinámicamente en la columna izquierda.

---

### PASO 5

### Formulario de contacto interactivo y eventos

**CONCEPTO QUE APLICA**

Eventos de formulario (U2 · S2): Captura del evento `submit`, uso de `preventDefault()` y entrega de respuesta visual al usuario.

### Código del paso

1. En `index.html`, reemplace `<!-- PASO 5 · Formulario de contacto -->` por:

```html
<section class="seccion-principal contacto-form">
  <h2>ENVIAR MENSAJE</h2>
  <form id="form-contacto">
    <div class="grupo-campo">
      <label for="nombre-remitente">Su Nombre <span class="obligatorio">*</span></label>
      <input type="text" id="nombre-remitente" name="nombre" required minlength="3" placeholder="Ej. Ana Pérez">
    </div>
    <div class="grupo-campo">
      <label for="email-remitente">Su Correo <span class="obligatorio">*</span></label>
      <input type="email" id="email-remitente" name="email" required placeholder="correo@ejemplo.com">
    </div>
    <div class="grupo-campo">
      <label for="mensaje-remitente">Mensaje <span class="obligatorio">*</span></label>
      <textarea id="mensaje-remitente" name="mensaje" rows="3" required placeholder="Escriba su mensaje..."></textarea>
    </div>
    
    <div class="acciones-form">
      <button type="submit" class="btn btn-primario">Enviar Mensaje</button>
      <button type="button" id="btn-tema" class="btn btn-secundario">🌓 Cambiar Modo</button>
      <button type="button" id="btn-imprimir" class="btn btn-secundario">📄 Imprimir PDF</button>
    </div>
  </form>
  <p id="mensaje-respuesta" class="mensaje-respuesta" role="status" aria-live="polite"></p>
</section>
```

2. Agregue al final de `css/styles.css`:

```css
/* ===== Paso 5 · Estilos de Formulario ===== */
.formulario, #form-contacto {
  display: grid;
  gap: 0.85rem;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.grupo-campo label {
  font-weight: 600;
  font-size: 0.9rem;
}

.obligatorio {
  color: var(--rojo-error);
}

input, textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #CCC;
  border-radius: 8px;
  font: inherit;
}

input:focus, textarea:focus {
  outline: 2px solid var(--morado-medio);
  border-color: var(--morado-oscuro);
}

.acciones-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primario {
  background-color: var(--morado-oscuro);
  color: var(--blanco);
}

.btn-primario:hover {
  background-color: var(--morado-medio);
}

.btn-secundario {
  background-color: var(--lila-claro);
  color: var(--morado-oscuro);
}

.btn-secundario:hover {
  background-color: #D4C3E0;
}

.mensaje-respuesta {
  margin-top: 0.8rem;
  font-weight: 600;
  min-height: 1.5rem;
}

.mensaje-respuesta.ok {
  color: var(--verde-exito);
}

.mensaje-respuesta.error {
  color: var(--rojo-error);
}
```

3. Agregue la función en `js/app.js`:

```javascript
// ===== 3. Control del Formulario de Contacto =====
function inicializarFormulario() {
  const formulario = document.querySelector('#form-contacto');
  const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

  if (!formulario) return;

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector('#nombre-remitente').value.trim();
    const email = document.querySelector('#email-remitente').value.trim();
    const mensaje = document.querySelector('#mensaje-remitente').value.trim();

    if (!nombre || !email || !mensaje) {
      mensajeRespuesta.textContent = 'Por favor complete todos los campos obligatorios.';
      mensajeRespuesta.className = 'mensaje-respuesta error';
      return;
    }

    mensajeRespuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado exitosamente.`;
    mensajeRespuesta.className = 'mensaje-respuesta ok';

    formulario.reset();
  });
}
```

**✔ Punto de control**

- [ ] Al presionar "Enviar Mensaje" con datos completos, aparece el aviso verde de confirmación sin recargar la página.

---

### PASO 6

### Persistencia de preferencias (Modo Oscuro) con localStorage

**CONCEPTO QUE APLICA**

Persistencia local (U2 · S2): Conservación de la preferencia visual del usuario entre sesiones mediante `localStorage`.

### Código del paso

1. Agregue las reglas de Modo Oscuro a `css/styles.css`:

```css
/* ===== Paso 6 · Modo Oscuro ===== */
body.modo-oscuro {
  background-color: #1A1A1A;
  color: #E0E0E0;
}

body.modo-oscuro .cv-contenedor,
body.modo-oscuro .contenido-principal {
  background-color: #242424;
  color: #E0E0E0;
}

body.modo-oscuro h1, 
body.modo-oscuro .seccion-principal h2,
body.modo-oscuro .seccion-lateral h2 {
  color: #D8B4E2;
}

body.modo-oscuro .subtitulo,
body.modo-oscuro .item-educacion h3 {
  color: #B584C4;
}

body.modo-oscuro .barra-lateral {
  background-color: #332233;
}

body.modo-oscuro input, 
body.modo-oscuro textarea {
  background-color: #333;
  color: #FFF;
  border-color: #555;
}
```

2. Agregue la función a `js/app.js`:

```javascript
// ===== 4. Persistencia y Cambio de Tema (Modo Oscuro/Claro) =====
function inicializarTema() {
  const btnTema = document.querySelector('#btn-tema');
  if (!btnTema) return;

  const temaGuardado = localStorage.getItem('cv-tema');
  if (temaGuardado === 'oscuro') {
    document.body.classList.add('modo-oscuro');
  }

  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    const esOscuro = document.body.classList.contains('modo-oscuro');
    localStorage.setItem('cv-tema', esOscuro ? 'oscuro' : 'claro');
  });
}
```

**✔ Punto de control**

- [ ] Al hacer clic en "Cambiar Modo" los colores alternan a oscuro y permanecen tras refrescar (F5).

---

### PASO 7

### Impresión / Exportación a PDF y Accesibilidad

**CONCEPTO QUE APLICA**

Reglas `@media print` en CSS para ocultar botones interactivos al exportar la hoja de vida a PDF.

### Código del paso

1. Agregue al final de `css/styles.css`:

```css
/* ===== Paso 7 · Modo Impresión / Generación PDF ===== */
@media print {
  body {
    background: none;
    padding: 0;
    color: #000;
  }
  .cv-contenedor {
    box-shadow: none;
    max-width: 100%;
    grid-template-columns: 280px 1fr;
  }
  .contacto-form, .acciones-form {
    display: none !important;
  }
}
```

2. Agregue a `js/app.js`:

```javascript
// ===== 5. Exportar / Imprimir a PDF =====
function inicializarImpresion() {
  const btnImprimir = document.querySelector('#btn-imprimir');
  if (!btnImprimir) return;

  btnImprimir.addEventListener('click', () => {
    window.print();
  });
}
```

---

## Anexo A · Código final completo

### `index.html`

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Hoja de vida profesional de María Acuña - Estudiante de Ingeniería de Sistemas">
  <title>Hoja de Vida · María Acuña</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/app.js" defer></script>
</head>
<body>
  <div class="cv-contenedor">
    
    <!-- Columna Izquierda / Barra Lateral -->
    <aside class="barra-lateral">
      <div class="foto-perfil-contenedor">
        <img src="https://via.placeholder.com/180" alt="Foto de perfil de María Acuña" class="foto-perfil" id="foto-perfil">
      </div>

      <section class="seccion-lateral datos-personales">
        <h2>Información</h2>
        <ul>
          <li><strong>Fecha de nacimiento:</strong> 17/12/2007</li>
          <li><strong>Edad:</strong> 18 años</li>
          <li><strong>Nacionalidad:</strong> Colombiana</li>
        </ul>
      </section>

      <section class="seccion-lateral contacto">
        <h2>Contacto</h2>
        <ul>
          <li>📞 (57) 311 877 48 31</li>
          <li>✉️ mariaacuna495715@gmail.com</li>
          <li>💬 @MaraAcua3</li>
          <li>📍 Caucasia, Antioquia</li>
        </ul>
      </section>

      <section class="seccion-lateral idiomas">
        <h2>Idiomas</h2>
        <ul id="lista-idiomas">
          <li>Español (Nativo)</li>
        </ul>
      </section>

      <section class="seccion-lateral habilidades">
        <h2>Habilidades</h2>
        <ul id="lista-habilidades" class="lista-habilidades">
          <!-- Se carga dinámicamente con JavaScript -->
        </ul>
      </section>
    </aside>

    <!-- Columna Principal / Contenido -->
    <main class="contenido-principal">
      <header class="encabezado-perfil">
        <h1>MARÍA ACUÑA</h1>
        <p class="subtitulo">ESTUDIANTE DE INGENIERÍA DE SISTEMAS</p>
      </header>

      <section class="seccion-principal sobre-mi">
        <h2>SOBRE MÍ</h2>
        <p>
          Soy estudiante de cuarto semestre de Ingeniería de Sistemas, interesada en la tecnología, 
          la programación y el desarrollo de soluciones informáticas. Me considero una persona responsable, 
          creativa, comprometida y con disposición para aprender. Tengo facilidad para trabajar en equipo, 
          adaptarme a nuevos retos y adquirir conocimientos. Busco fortalecer mis habilidades y crecer 
          profesionalmente en el área tecnológica.
        </p>
      </section>

      <section class="seccion-principal educacion">
        <h2>FORMACIÓN ACADÉMICA</h2>
        <article class="item-educacion">
          <h3>CORPORACIÓN UNIVERSITARIA REMINGTON</h3>
          <p class="carrera"><strong>Ingeniería de Sistemas</strong></p>
          <p class="fecha">2025 - Actualmente</p>
          <p class="estado">Cuarto semestre en curso</p>
        </article>
      </section>

      <section class="seccion-principal complementaria">
        <h2>FORMACIÓN COMPLEMENTARIA</h2>
        <article class="item-educacion">
          <h3>SERVICIO NACIONAL DE APRENDIZAJE (SENA)</h3>
          <p class="carrera"><strong>Técnico en Sistemas</strong></p>
          <p class="fecha">[2023 – 2024]</p>
        </article>
      </section>

      <section class="seccion-principal contacto-form">
        <h2>ENVIAR MENSAJE</h2>
        <form id="form-contacto">
          <div class="grupo-campo">
            <label for="nombre-remitente">Su Nombre <span class="obligatorio">*</span></label>
            <input type="text" id="nombre-remitente" name="nombre" required minlength="3" placeholder="Ej. Ana Pérez">
          </div>
          <div class="grupo-campo">
            <label for="email-remitente">Su Correo <span class="obligatorio">*</span></label>
            <input type="email" id="email-remitente" name="email" required placeholder="correo@ejemplo.com">
          </div>
          <div class="grupo-campo">
            <label for="mensaje-remitente">Mensaje <span class="obligatorio">*</span></label>
            <textarea id="mensaje-remitente" name="mensaje" rows="3" required placeholder="Escriba su mensaje..."></textarea>
          </div>
          
          <div class="acciones-form">
            <button type="submit" class="btn btn-primario">Enviar Mensaje</button>
            <button type="button" id="btn-tema" class="btn btn-secundario">🌓 Cambiar Modo</button>
            <button type="button" id="btn-imprimir" class="btn btn-secundario">📄 Imprimir PDF</button>
          </div>
        </form>
        <p id="mensaje-respuesta" class="mensaje-respuesta" role="status" aria-live="polite"></p>
      </section>
    </main>

  </div>
</body>
</html>
```

### `css/styles.css`

```css
/* ===== Variables de Paleta Morado / Lila ===== */
:root {
  --morado-oscuro: #4A1E4A;
  --morado-medio: #6B306B;
  --lila-claro: #E6D9ED;
  --lila-fondo: #F3EEF7;
  --blanco: #FFFFFF;
  --texto-oscuro: #2D2D2D;
  --texto-suave: #555555;
  --verde-exito: #0F7B3F;
  --rojo-error: #E3001B;
  --sombra: 0 4px 15px rgba(0, 0, 0, 0.1);
  --radio: 12px;
}

/* Reset y Caja */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #D6C7DE;
  color: var(--texto-oscuro);
  line-height: 1.6;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.cv-contenedor {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--blanco);
  border-radius: var(--radio);
  box-shadow: var(--sombra);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  transition: background-color 0.3s;
}

/* Sidebar / Barra Lateral */
.barra-lateral {
  background-color: var(--lila-claro);
  padding: 2rem;
  transition: background-color 0.3s;
}

.foto-perfil-contenedor {
  text-align: center;
  margin-bottom: 1.5rem;
}

.foto-perfil {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--morado-oscuro);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.seccion-lateral {
  margin-bottom: 1.8rem;
}

.seccion-lateral h2 {
  font-size: 1.1rem;
  color: var(--morado-oscuro);
  border-bottom: 2px solid var(--morado-medio);
  padding-bottom: 4px;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.seccion-lateral ul {
  list-style: none;
}

.seccion-lateral li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* Contenido Principal */
.contenido-principal {
  padding: 2.5rem;
  background-color: var(--blanco);
  transition: background-color 0.3s;
}

h1 {
  font-size: 2.4rem;
  color: var(--morado-oscuro);
  letter-spacing: 1px;
}

.subtitulo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--morado-medio);
  margin-bottom: 1.5rem;
}

.seccion-principal {
  margin-bottom: 2rem;
}

.seccion-principal h2 {
  font-size: 1.3rem;
  color: var(--morado-oscuro);
  border-bottom: 2px solid var(--lila-claro);
  padding-bottom: 5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.item-educacion {
  margin-bottom: 1rem;
}

.item-educacion h3 {
  font-size: 1.05rem;
  color: var(--morado-medio);
}

/* Formulario */
.formulario, #form-contacto {
  display: grid;
  gap: 0.85rem;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.grupo-campo label {
  font-weight: 600;
  font-size: 0.9rem;
}

.obligatorio {
  color: var(--rojo-error);
}

input, textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #CCC;
  border-radius: 8px;
  font: inherit;
}

input:focus, textarea:focus {
  outline: 2px solid var(--morado-medio);
  border-color: var(--morado-oscuro);
}

.acciones-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primario {
  background-color: var(--morado-oscuro);
  color: var(--blanco);
}

.btn-primario:hover {
  background-color: var(--morado-medio);
}

.btn-secundario {
  background-color: var(--lila-claro);
  color: var(--morado-oscuro);
}

.btn-secundario:hover {
  background-color: #D4C3E0;
}

.mensaje-respuesta {
  margin-top: 0.8rem;
  font-weight: 600;
  min-height: 1.5rem;
}

.mensaje-respuesta.ok {
  color: var(--verde-exito);
}

.mensaje-respuesta.error {
  color: var(--rojo-error);
}

/* Modo Oscuro */
body.modo-oscuro {
  background-color: #1A1A1A;
  color: #E0E0E0;
}

body.modo-oscuro .cv-contenedor,
body.modo-oscuro .contenido-principal {
  background-color: #242424;
  color: #E0E0E0;
}

body.modo-oscuro h1, 
body.modo-oscuro .seccion-principal h2,
body.modo-oscuro .seccion-lateral h2 {
  color: #D8B4E2;
}

body.modo-oscuro .subtitulo,
body.modo-oscuro .item-educacion h3 {
  color: #B584C4;
}

body.modo-oscuro .barra-lateral {
  background-color: #332233;
}

body.modo-oscuro input, 
body.modo-oscuro textarea {
  background-color: #333;
  color: #FFF;
  border-color: #555;
}

/* Responsive Grid (Móvil Primero -> Tablet/Escritorio) */
@media (min-width: 768px) {
  .cv-contenedor {
    grid-template-columns: 320px 1fr;
  }
}

/* Modo Impresión / Generación PDF */
@media print {
  body {
    background: none;
    padding: 0;
    color: #000;
  }
  .cv-contenedor {
    box-shadow: none;
    max-width: 100%;
    grid-template-columns: 280px 1fr;
  }
  .contacto-form, .acciones-form {
    display: none !important;
  }
}
```

### `js/app.js`

```javascript
'use strict';

// ===== 1. Datos del Perfil (Habilidades) =====
const habilidades = [
  "Trabajo en equipo.",
  "Resolución de problemas.",
  "Comunicación efectiva.",
  "Creatividad e innovación.",
  "Adaptabilidad y aprendizaje continuo.",
  "Organización y responsabilidad.",
  "Manejo de herramientas tecnológicas."
];

// ===== 2. Renderizado Dinámico de Habilidades =====
function renderizarHabilidades() {
  const contenedor = document.querySelector('#lista-habilidades');
  if (!contenedor) return;
  
  contenedor.innerHTML = '';
  habilidades.forEach((habilidad) => {
    const li = document.createElement('li');
    li.textContent = `• ${habilidad}`;
    contenedor.appendChild(li);
  });
}

// ===== 3. Control del Formulario de Contacto =====
function inicializarFormulario() {
  const formulario = document.querySelector('#form-contacto');
  const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

  if (!formulario) return;

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector('#nombre-remitente').value.trim();
    const email = document.querySelector('#email-remitente').value.trim();
    const mensaje = document.querySelector('#mensaje-remitente').value.trim();

    if (!nombre || !email || !mensaje) {
      mensajeRespuesta.textContent = 'Por favor complete todos los campos obligatorios.';
      mensajeRespuesta.className = 'mensaje-respuesta error';
      return;
    }

    mensajeRespuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado exitosamente.`;
    mensajeRespuesta.className = 'mensaje-respuesta ok';

    formulario.reset();
  });
}

// ===== 4. Persistencia y Cambio de Tema (Modo Oscuro/Claro) =====
function inicializarTema() {
  const btnTema = document.querySelector('#btn-tema');
  if (!btnTema) return;

  const temaGuardado = localStorage.getItem('cv-tema');
  if (temaGuardado === 'oscuro') {
    document.body.classList.add('modo-oscuro');
  }

  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    const esOscuro = document.body.classList.contains('modo-oscuro');
    localStorage.setItem('cv-tema', esOscuro ? 'oscuro' : 'claro');
  });
}

// ===== 5. Exportar / Imprimir a PDF =====
function inicializarImpresion() {
  const btnImprimir = document.querySelector('#btn-imprimir');
  if (!btnImprimir) return;

  btnImprimir.addEventListener('click', () => {
    window.print();
  });
}

// ===== 6. Inicialización al Cargar el DOM =====
document.addEventListener('DOMContentLoaded', () => {
  renderizarHabilidades();
  inicializarFormulario();
  inicializarTema();
  inicializarImpresion();
});
```