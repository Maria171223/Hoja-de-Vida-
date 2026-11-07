# Hoja de Vida Web Interactiva: María Acuña

> Conversión a Markdown del ejercicio guiado de Lenguaje de Programación 2. Se adapta el diseño de la hoja de vida profesional de María Acuña creando una aplicación web responsive, interactiva, accesible y con estética moderna morada estilo Canva.

E J E R C I C I O G U I A D O PA S O A PA S O
Hoja de Vida Web Interactiva:
María Acuña
HTML semántico, formularios con integración de Formspree y Fetch API, CSS responsive con formas orgánicas y variables de tema (Modo Oscuro), JavaScript DOM, eventos y exportación a PDF, integrados en 7 pasos.
7                                100%                            350+                              15
pasos con punto de control       diseño responsive adaptable     líneas de código final      comprobaciones superadas
Curso: Lenguaje de Programación 2                       Programa: Facultad de Ingenierías
Docente: Luis Alfonso Ayala Isaza                       Versión: Noviembre de 2026

### Presentación

Esta guía acompaña el curso Lenguaje de Programación 2. En este ejercicio guiado usted construirá una aplicación web real —la Hoja de Vida interactiva, responsive y moderna de María Acuña (Estudiante de Ingeniería de Sistemas)— integrando HTML semántico, estilos avanzados con diseño curvo en CSS, iconografía vectorial, manipulación del DOM, interacción de correo mediante Formspree y Fetch API, cambio de tema claro/oscuro con `localStorage` y optimización para impresión a PDF.

7                                   100%                       3
pasos cortos                         responsive (móvil/desktop) archivos: HTML, CSS, JS

---

## Parte I · Antes de empezar

### Objetivo y estructura de carpetas

**OBJETIVO DE APRENDIZAJE**

Al terminar, usted será capaz de construir un sitio web de presentación profesional aplicando HTML semántico, CSS responsive moderno con paleta morada y bordes asimétricos, comunicación asíncrona de formularios (Fetch API), persistencia local con `localStorage` y optimización para lectura de pantalla e impresión en alta fidelidad de color.

Estructura final del proyecto:

```text
hoja-de-vida-maria-acuna/
├── index.html                     ← estructura (HTML semántico)
├── styles.css                     ← presentación, layout y tema (CSS)
└── app.js                         ← comportamiento e interactividad (JavaScript)
```

---

## Parte II · Construcción paso a paso

---

### PASO 1

### Estructura HTML semántica y datos de perfil

**CONCEPTO QUE APLICA**

HTML semántico: Uso de elementos como `<aside>`, `<main>`, `<header>`, `<section>` y `<article>` para delimitar las áreas del documento, vinculando librerías de iconos externas (FontAwesome) y fuentes tipográficas (Google Fonts - Poppins).

#### Código del paso

Cree el archivo `index.html` con la base estructural:

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hoja de Vida · María Acuña</title>
  <!-- Fuentes de Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- FontAwesome para iconos -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div class="cv-contenedor">
    
    <!-- Columna Izquierda / Barra Lateral -->
    <aside class="barra-lateral">
      <div class="foto-perfil-contenedor">
        <img src="Mi perfil profesional.png" alt="Foto de perfil de María Acuña" class="foto-perfil" id="foto-perfil">
      </div>

      <div class="datos-personales">
        <p><strong>Fecha de nacimiento:</strong> 17/12/2007</p>
        <p><strong>Edad:</strong> 18 años</p>
        <p><strong>Nacionalidad:</strong> Colombiana</p>
      </div>

      <section class="seccion-lateral contacto">
        <h2><i class="fa-solid fa-user-circle"></i> CONTACTO</h2>
        <ul class="lista-contacto">
          <li><span class="icono-circulo"><i class="fa-solid fa-phone"></i></span> (57) 311 877 48 31</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-envelope"></i></span> mariaacuna495715@gmail.com</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-comment-dots"></i></span> @MaraAcua3</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-location-dot"></i></span> Caucasia, Antioquia</li>
        </ul>
      </section>

      <section class="seccion-lateral idiomas">
        <h2><i class="fa-solid fa-globe"></i> IDIOMAS</h2>
        <p class="texto-idioma">Español (Nativo)</p>
      </section>

      <section class="seccion-lateral habilidades">
        <h2><i class="fa-solid fa-gears"></i> HABILIDADES</h2>
        <ul id="lista-habilidades" class="lista-habilidades">
          <!-- PASO 4 · Carga dinámica con JavaScript -->
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
        <h2><i class="fa-solid fa-graduation-cap"></i> FORMACIÓN ACADÉMICA</h2>
        <article class="item-educacion">
          <h3>CORPORACIÓN UNIVERSITARIA REMINGTON</h3>
          <p class="carrera">Ingeniería de Sistemas</p>
          <p class="fecha">2025 - Actualmente</p>
          <p class="estado">Cuarto semestre en curso</p>
        </article>
      </section>

      <section class="seccion-principal complementaria">
        <h2><i class="fa-solid fa-arrows-rotate"></i> FORMACIÓN COMPLEMENTARIA</h2>
        <article class="item-educacion">
          <h3>SERVICIO NACIONAL DE APRENDIZAJE (SENA)</h3>
          <p class="carrera">Técnico en Sistemas</p>
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

* \[ \] El título de la pestaña indica "Hoja de Vida · María Acuña".
* \[ \] En F12 → Elements se identifican las secciones semánticas `<aside>` y `<main>`.

---

### PASO 2

### Estilos con diseño orgánico, curvas y paleta morada

**CONCEPTO QUE APLICA**

Variables CSS (`:root`), bordes asimétricos para la barra lateral (`border-radius: 0 40% 15% 0 / 0 12% 8% 0`), figuras orgánicas en esquinas y ajuste de color en impresión (`-webkit-print-color-adjust: exact`).

#### Código del paso

Cree el archivo `styles.css`:

```css
/* ===== Variables Paleta Morada Canva ===== */
:root {
  --morado-oscuro: #4A1E4A;
  --morado-titulo: #5C1D5C;
  --morado-icono: #6B306B;
  --lila-fondo: #E6DAEC;
  --lila-tarjeta: #F4EDF6;
  --blanco: #FFFFFF;
  --texto-oscuro: #2D233E;
  --texto-suave: #555555;
  --verde-exito: #0F7B3F;
  --rojo-error: #E3001B;
  --sombra: 0 10px 25px rgba(74, 30, 74, 0.1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #D3C3DB;
  color: var(--texto-oscuro);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Lienzo de la Hoja de Vida */
.cv-contenedor {
  width: 100%;
  max-width: 880px;
  background: var(--blanco);
  border-radius: 20px;
  box-shadow: var(--sombra);
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

/* Decoraciones Orgánicas en Esquinas */
.cv-contenedor::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  border: 10px solid #CDBAD7;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  opacity: 0.5;
  pointer-events: none;
}

.cv-contenedor::after {
  content: '';
  position: absolute;
  bottom: -40px;
  right: -10px;
  width: 200px;
  height: 130px;
  background-color: var(--morado-titulo);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  pointer-events: none;
}

/* Sidebar Curvo */
.barra-lateral {
  background-color: var(--lila-fondo);
  padding: 2.2rem 1.5rem;
  border-radius: 0 40% 15% 0 / 0 12% 8% 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 1;
}

.foto-perfil-contenedor {
  text-align: center;
}

.foto-perfil {
  width: 165px;
  height: 165px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--morado-oscuro);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.datos-personales {
  background: var(--lila-tarjeta);
  padding: 0.9rem 1rem;
  border-radius: 14px;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--texto-oscuro);
}

.seccion-lateral h2 {
  font-size: 1.05rem;
  color: var(--morado-titulo);
  font-weight: 700;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.seccion-lateral h2 i {
  color: var(--morado-icono);
  font-size: 1.1rem;
}

.lista-contacto {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.lista-contacto li {
  font-size: 0.83rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--texto-oscuro);
}

.icono-circulo {
  width: 28px;
  height: 28px;
  background-color: var(--lila-tarjeta);
  color: var(--morado-icono);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.texto-idioma {
  font-size: 0.85rem;
  padding-left: 5px;
}

.lista-habilidades {
  list-style: none;
  padding-left: 5px;
}

.lista-habilidades li {
  font-size: 0.83rem;
  margin-bottom: 0.35rem;
  color: var(--texto-oscuro);
}

/* Columna Principal */
.contenido-principal {
  padding: 2.5rem 2rem;
  z-index: 1;
}

.encabezado-perfil h1 {
  font-size: 2.5rem;
  color: var(--morado-titulo);
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1.1;
}

.subtitulo {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--morado-titulo);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 4px;
  margin-bottom: 1.5rem;
}

.seccion-principal {
  margin-bottom: 1.5rem;
}

.seccion-principal h2 {
  font-size: 1.1rem;
  color: var(--morado-titulo);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.seccion-principal h2 i {
  color: var(--morado-icono);
  font-size: 1.05rem;
}

.seccion-principal p {
  font-size: 0.84rem;
  color: #444444;
  text-align: justify;
  line-height: 1.5;
}

.item-educacion h3 {
  font-size: 0.92rem;
  color: var(--morado-titulo);
  font-weight: 700;
}

.item-educacion .carrera {
  font-size: 0.85rem;
  color: var(--texto-oscuro);
  font-weight: 500;
}

.item-educacion .fecha, .item-educacion .estado {
  font-size: 0.82rem;
  color: var(--texto-suave);
}
```

**✔ Punto de control**

* \[ \] El diseño muestra la barra lateral lila con su borde curvo hacia el contenido.
* \[ \] Las ondas decorativas aparecen en las esquinas.

---

### PASO 3

### Layout Responsive (Móvil y Escritorio)

**CONCEPTO QUE APLICA**

CSS Grid adaptativo y Media Queries para adaptar las dos columnas en escritorio a una sola fila en dispositivos móviles.

#### Código del paso

Agregue al final de `styles.css`:

```css
/* ===== Paso 3 · Responsive Layout ===== */
@media (max-width: 768px) {
  .cv-contenedor {
    grid-template-columns: 1fr;
  }

  .barra-lateral {
    border-radius: 0 0 30px 30px;
  }

  .contenido-principal {
    padding: 1.5rem;
  }
}
```

**✔ Punto de control**

* \[ \] En pantallas menores a 768px, la barra lateral pasa arriba y el contenido principal abajo.

---

### PASO 4

### Renderizado dinámico de habilidades con el DOM

**CONCEPTO QUE APLICA**

Manipulación del DOM: Generación programática de elementos `<li>` a partir de un arreglo en JS.

#### Código del paso

Cree el archivo `app.js` e incluya la función de renderizado:

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
```

**✔ Punto de control**

* \[ \] Las 7 habilidades se muestran automáticamente dentro del elemento `<ul id="lista-habilidades">`.

---

### PASO 5

### Formulario de contacto con envío asíncrono (Fetch API y Formspree)

**CONCEPTO QUE APLICA**

Integración de servicios backend (Formspree) y consumo de APIs mediante `fetch` sin recarga de página.

#### Código del paso

1. En `index.html`, inserte la sección del formulario antes del cierre de `</main>`:

```html
<section class="seccion-principal contacto-form">
  <h2><i class="fa-solid fa-paper-plane"></i> ENVIAR MENSAJE</h2>
  <form id="form-contacto" data-url="https://formspree.io/f/TU_CODIGO_FORMSPREE">
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

2. Agregue los estilos del formulario en `styles.css`:

```css
/* ===== Paso 5 · Estilos del Formulario ===== */
#form-contacto {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.grupo-campo label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--morado-titulo);
}

.obligatorio {
  color: var(--rojo-error);
}

input, textarea {
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid #CCC;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.82rem;
  background-color: var(--lila-tarjeta);
}

input:focus, textarea:focus {
  outline: 2px solid var(--morado-icono);
  background-color: var(--blanco);
}

.acciones-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s;
}

.btn:active {
  transform: scale(0.97);
}

.btn-primario {
  background-color: var(--morado-oscuro);
  color: var(--blanco);
}

.btn-primario:hover {
  background-color: var(--morado-titulo);
}

.btn-secundario {
  background-color: var(--lila-fondo);
  color: var(--morado-titulo);
}

.btn-secundario:hover {
  background-color: #D6C4E0;
}

.mensaje-respuesta {
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0.4rem;
}

.mensaje-respuesta.ok {
  color: var(--verde-exito);
}

.mensaje-respuesta.error {
  color: var(--rojo-error);
}
```

3. Agregue la lógica de envío asíncrono en `app.js`:

```javascript
// ===== 3. Control del Formulario de Contacto =====
function inicializarFormulario() {
  const formulario = document.querySelector('#form-contacto');
  const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

  if (!formulario) return;

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const urlEndpoint = formulario.getAttribute('data-url');
    const datos = new FormData(formulario);
    
    mensajeRespuesta.textContent = 'Enviando mensaje...';
    mensajeRespuesta.className = 'mensaje-respuesta';

    try {
      const respuesta = await fetch(urlEndpoint, {
        method: 'POST',
        body: datos,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (respuesta.ok) {
        mensajeRespuesta.textContent = '¡Gracias! Tu mensaje ha sido enviado exitosamente.';
        mensajeRespuesta.className = 'mensaje-respuesta ok';
        formulario.reset();
      } else {
        mensajeRespuesta.textContent = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.';
        mensajeRespuesta.className = 'mensaje-respuesta error';
      }
    } catch (error) {
      mensajeRespuesta.textContent = 'Ocurrió un error al conectar con el servidor.';
      mensajeRespuesta.className = 'mensaje-respuesta error';
    }
  });
}
```

**✔ Punto de control**

* \[ \] Al enviar el formulario, el aviso en verde confirma la recepción del mensaje sin redirigir ni parpadear la pantalla.

---

### PASO 6

### Persistencia del Modo Oscuro con localStorage

**CONCEPTO QUE APLICA**

Uso del objeto `localStorage` para guardar y consultar la preferencia visual entre recargas del navegador.

#### Código del paso

1. Agregue las reglas visuales para la clase `.modo-oscuro` al final de `styles.css`:

```css
/* ===== Paso 6 · Estilos para Modo Oscuro ===== */
body.modo-oscuro {
  background-color: #1E1726;
  color: #E2D9EC;
}

body.modo-oscuro .cv-contenedor {
  background-color: #261D30;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

body.modo-oscuro .barra-lateral {
  background-color: #362845;
}

body.modo-oscuro .datos-personales,
body.modo-oscuro .icono-circulo,
body.modo-oscuro input,
body.modo-oscuro textarea {
  background-color: #2D213B;
  color: #E2D9EC;
  border-color: #4C3961;
}

body.modo-oscuro input:focus,
body.modo-oscuro textarea:focus {
  background-color: #382A4A;
}

body.modo-oscuro h1,
body.modo-oscuro .seccion-principal h2,
body.modo-oscuro .seccion-lateral h2,
body.modo-oscuro .item-educacion h3,
body.modo-oscuro .grupo-campo label {
  color: #D8B2E6;
}

body.modo-oscuro .seccion-principal h2 i,
body.modo-oscuro .seccion-lateral h2 i,
body.modo-oscuro .icono-circulo {
  color: #C58EE0;
}

body.modo-oscuro .subtitulo,
body.modo-oscuro .carrera,
body.modo-oscuro .lista-contacto li,
body.modo-oscuro .lista-habilidades li,
body.modo-oscuro .texto-idioma {
  color: #F0E6F7;
}

body.modo-oscuro .seccion-principal p,
body.modo-oscuro .item-educacion .fecha,
body.modo-oscuro .item-educacion .estado {
  color: #CBBBD8;
}

body.modo-oscuro .btn-secundario {
  background-color: #3D2D4F;
  color: #D8B2E6;
}

body.modo-oscuro .btn-secundario:hover {
  background-color: #4C3963;
}
```

2. Agregue la función en `app.js`:

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

* \[ \] Al pulsar "Cambiar Modo" la interfaz cambia a tonos oscuros morados y se mantiene activa al recargar (F5).

---

### PASO 7

### Impresión / Exportación a PDF y disparador de eventos

**CONCEPTO QUE APLICA**

Reglas `@media print` para ocultar botones y formularios, junto con el método `window.print()`.

#### Código del paso

1. Agregue las reglas finales a `styles.css`:

```css
/* ===== Paso 7 · Modo Impresión / Generación PDF ===== */
@media print {
  body {
    background: none;
    padding: 0;
  }
  .cv-contenedor {
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }
  .contacto-form {
    display: none !important;
  }
}
```

2. Agregue la lógica de impresión e inicialización en `app.js`:

```javascript
// ===== 5. Exportar / Imprimir a PDF =====
function inicializarImpresion() {
  const btnImprimir = document.querySelector('#btn-imprimir');
  if (!btnImprimir) return;

  btnImprimir.addEventListener('click', () => {
    window.print();
  });
}

// ===== 6. Inicialización Completa =====
document.addEventListener('DOMContentLoaded', () => {
  renderizarHabilidades();
  inicializarFormulario();
  inicializarTema();
  inicializarImpresion();
});
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
  <title>Hoja de Vida · María Acuña</title>
  <!-- Fuentes de Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- FontAwesome para los iconos -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div class="cv-contenedor">
    
    <!-- Columna Izquierda / Barra Lateral -->
    <aside class="barra-lateral">
      <div class="foto-perfil-contenedor">
        <img src="Mi perfil profesional.png" alt="Foto de perfil de María Acuña" class="foto-perfil" id="foto-perfil">
      </div>

      <div class="datos-personales">
        <p><strong>Fecha de nacimiento:</strong> 17/12/2007</p>
        <p><strong>Edad:</strong> 18 años</p>
        <p><strong>Nacionalidad:</strong> Colombiana</p>
      </div>

      <section class="seccion-lateral contacto">
        <h2><i class="fa-solid fa-user-circle"></i> CONTACTO</h2>
        <ul class="lista-contacto">
          <li><span class="icono-circulo"><i class="fa-solid fa-phone"></i></span> (57) 311 877 48 31</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-envelope"></i></span> mariaacuna495715@gmail.com</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-comment-dots"></i></span> @MaraAcua3</li>
          <li><span class="icono-circulo"><i class="fa-solid fa-location-dot"></i></span> Caucasia, Antioquia</li>
        </ul>
      </section>

      <section class="seccion-lateral idiomas">
        <h2><i class="fa-solid fa-globe"></i> IDIOMAS</h2>
        <p class="texto-idioma">Español (Nativo)</p>
      </section>

      <section class="seccion-lateral habilidades">
        <h2><i class="fa-solid fa-gears"></i> HABILIDADES</h2>
        <ul id="lista-habilidades" class="lista-habilidades">
          <!-- Carga dinámicamente con JavaScript -->
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
        <h2><i class="fa-solid fa-graduation-cap"></i> FORMACIÓN ACADÉMICA</h2>
        <article class="item-educacion">
          <h3>CORPORACIÓN UNIVERSITARIA REMINGTON</h3>
          <p class="carrera">Ingeniería de Sistemas</p>
          <p class="fecha">2025 - Actualmente</p>
          <p class="estado">Cuarto semestre en curso</p>
        </article>
      </section>

      <section class="seccion-principal complementaria">
        <h2><i class="fa-solid fa-arrows-rotate"></i> FORMACIÓN COMPLEMENTARIA</h2>
        <article class="item-educacion">
          <h3>SERVICIO NACIONAL DE APRENDIZAJE (SENA)</h3>
          <p class="carrera">Técnico en Sistemas</p>
          <p class="fecha">[2023 – 2024]</p>
        </article>
      </section>

      <!-- Formulario de contacto -->
      <section class="seccion-principal contacto-form">
        <h2><i class="fa-solid fa-paper-plane"></i> ENVIAR MENSAJE</h2>
        <form id="form-contacto" data-url="https://formspree.io/f/TU_CODIGO_FORMSPREE">
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

### `styles.css`

```css
/* ===== Variables Paleta Morada Canva ===== */
:root {
  --morado-oscuro: #4A1E4A;
  --morado-titulo: #5C1D5C;
  --morado-icono: #6B306B;
  --lila-fondo: #E6DAEC;
  --lila-tarjeta: #F4EDF6;
  --blanco: #FFFFFF;
  --texto-oscuro: #2D233E;
  --texto-suave: #555555;
  --verde-exito: #0F7B3F;
  --rojo-error: #E3001B;
  --sombra: 0 10px 25px rgba(74, 30, 74, 0.1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #D3C3DB;
  color: var(--texto-oscuro);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Lienzo de la Hoja de Vida */
.cv-contenedor {
  width: 100%;
  max-width: 880px;
  background: var(--blanco);
  border-radius: 20px;
  box-shadow: var(--sombra);
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

/* Decoraciones Orgánicas en Esquinas */
.cv-contenedor::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  border: 10px solid #CDBAD7;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  opacity: 0.5;
  pointer-events: none;
}

.cv-contenedor::after {
  content: '';
  position: absolute;
  bottom: -40px;
  right: -10px;
  width: 200px;
  height: 130px;
  background-color: var(--morado-titulo);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  pointer-events: none;
}

/* Sidebar Curvo */
.barra-lateral {
  background-color: var(--lila-fondo);
  padding: 2.2rem 1.5rem;
  border-radius: 0 40% 15% 0 / 0 12% 8% 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 1;
}

.foto-perfil-contenedor {
  text-align: center;
}

.foto-perfil {
  width: 165px;
  height: 165px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--morado-oscuro);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.datos-personales {
  background: var(--lila-tarjeta);
  padding: 0.9rem 1rem;
  border-radius: 14px;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--texto-oscuro);
}

.seccion-lateral h2 {
  font-size: 1.05rem;
  color: var(--morado-titulo);
  font-weight: 700;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.seccion-lateral h2 i {
  color: var(--morado-icono);
  font-size: 1.1rem;
}

.lista-contacto {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.lista-contacto li {
  font-size: 0.83rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--texto-oscuro);
}

.icono-circulo {
  width: 28px;
  height: 28px;
  background-color: var(--lila-tarjeta);
  color: var(--morado-icono);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.texto-idioma {
  font-size: 0.85rem;
  padding-left: 5px;
}

.lista-habilidades {
  list-style: none;
  padding-left: 5px;
}

.lista-habilidades li {
  font-size: 0.83rem;
  margin-bottom: 0.35rem;
  color: var(--texto-oscuro);
}

/* Columna Principal */
.contenido-principal {
  padding: 2.5rem 2rem;
  z-index: 1;
}

.encabezado-perfil h1 {
  font-size: 2.5rem;
  color: var(--morado-titulo);
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1.1;
}

.subtitulo {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--morado-titulo);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 4px;
  margin-bottom: 1.5rem;
}

.seccion-principal {
  margin-bottom: 1.5rem;
}

.seccion-principal h2 {
  font-size: 1.1rem;
  color: var(--morado-titulo);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.seccion-principal h2 i {
  color: var(--morado-icono);
  font-size: 1.05rem;
}

.seccion-principal p {
  font-size: 0.84rem;
  color: #444444;
  text-align: justify;
  line-height: 1.5;
}

.item-educacion {
  margin-top: 0.4rem;
}

.item-educacion h3 {
  font-size: 0.92rem;
  color: var(--morado-titulo);
  font-weight: 700;
}

.item-educacion .carrera {
  font-size: 0.85rem;
  color: var(--texto-oscuro);
  font-weight: 500;
}

.item-educacion .fecha, .item-educacion .estado {
  font-size: 0.82rem;
  color: var(--texto-suave);
}

/* Formulario de Contacto */
#form-contacto {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.grupo-campo label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--morado-titulo);
}

.obligatorio {
  color: var(--rojo-error);
}

input, textarea {
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid #CCC;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.82rem;
  background-color: var(--lila-tarjeta);
}

input:focus, textarea:focus {
  outline: 2px solid var(--morado-icono);
  background-color: var(--blanco);
}

.acciones-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s;
}

.btn:active {
  transform: scale(0.97);
}

.btn-primario {
  background-color: var(--morado-oscuro);
  color: var(--blanco);
}

.btn-primario:hover {
  background-color: var(--morado-titulo);
}

.btn-secundario {
  background-color: var(--lila-fondo);
  color: var(--morado-titulo);
}

.btn-secundario:hover {
  background-color: #D6C4E0;
}

.mensaje-respuesta {
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0.4rem;
}

.mensaje-respuesta.ok {
  color: var(--verde-exito);
}

.mensaje-respuesta.error {
  color: var(--rojo-error);
}

/* Modo Oscuro */
body.modo-oscuro {
  background-color: #1E1726;
  color: #E2D9EC;
}

body.modo-oscuro .cv-contenedor {
  background-color: #261D30;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

body.modo-oscuro .barra-lateral {
  background-color: #362845;
}

body.modo-oscuro .datos-personales,
body.modo-oscuro .icono-circulo,
body.modo-oscuro input,
body.modo-oscuro textarea {
  background-color: #2D213B;
  color: #E2D9EC;
  border-color: #4C3961;
}

body.modo-oscuro input:focus,
body.modo-oscuro textarea:focus {
  background-color: #382A4A;
}

body.modo-oscuro h1,
body.modo-oscuro .seccion-principal h2,
body.modo-oscuro .seccion-lateral h2,
body.modo-oscuro .item-educacion h3,
body.modo-oscuro .grupo-campo label {
  color: #D8B2E6;
}

body.modo-oscuro .seccion-principal h2 i,
body.modo-oscuro .seccion-lateral h2 i,
body.modo-oscuro .icono-circulo {
  color: #C58EE0;
}

body.modo-oscuro .subtitulo,
body.modo-oscuro .carrera,
body.modo-oscuro .lista-contacto li,
body.modo-oscuro .lista-habilidades li,
body.modo-oscuro .texto-idioma {
  color: #F0E6F7;
}

body.modo-oscuro .seccion-principal p,
body.modo-oscuro .item-educacion .fecha,
body.modo-oscuro .item-educacion .estado {
  color: #CBBBD8;
}

body.modo-oscuro .btn-secundario {
  background-color: #3D2D4F;
  color: #D8B2E6;
}

body.modo-oscuro .btn-secundario:hover {
  background-color: #4C3963;
}

/* Layout Responsive */
@media (max-width: 768px) {
  .cv-contenedor {
    grid-template-columns: 1fr;
  }

  .barra-lateral {
    border-radius: 0 0 30px 30px;
  }

  .contenido-principal {
    padding: 1.5rem;
  }
}

/* Modo Impresión / Generación PDF */
@media print {
  body {
    background: none;
    padding: 0;
  }
  .cv-contenedor {
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }
  .contacto-form {
    display: none !important;
  }
}
```

### `app.js`

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

// ===== 3. Control del Formulario de Contacto (Fetch API / Formspree) =====
function inicializarFormulario() {
  const formulario = document.querySelector('#form-contacto');
  const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

  if (!formulario) return;

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const urlEndpoint = formulario.getAttribute('data-url');
    const datos = new FormData(formulario);
    
    mensajeRespuesta.textContent = 'Enviando mensaje...';
    mensajeRespuesta.className = 'mensaje-respuesta';

    try {
      const respuesta = await fetch(urlEndpoint, {
        method: 'POST',
        body: datos,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (respuesta.ok) {
        mensajeRespuesta.textContent = '¡Gracias! Tu mensaje ha sido enviado exitosamente.';
        mensajeRespuesta.className = 'mensaje-respuesta ok';
        formulario.reset();
      } else {
        mensajeRespuesta.textContent = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.';
        mensajeRespuesta.className = 'mensaje-respuesta error';
      }
    } catch (error) {
      mensajeRespuesta.textContent = 'Ocurrió un error al conectar con el servidor.';
      mensajeRespuesta.className = 'mensaje-respuesta error';
    }
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