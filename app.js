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

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // Detiene la redirección de la página

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
// ===== Persistencia y Cambio de Tema (Modo Oscuro/Claro) =====
function inicializarTema() {
  const btnTema = document.querySelector('#btn-tema');
  if (!btnTema) return;

  // Cargar estado previo guardado en localStorage
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