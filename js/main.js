/* =====================================================================
   PORTAFOLIO PERSONAL

   PARTE A. CONTENIDO EDITABLE  -> lo único que necesitas tocar
     A1. SITIO         nombre, enlaces, hoja de vida, foto
     A2. PROYECTOS     tarjetas del portafolio
     A2b. SERVICIOS    servicios que ofreces, con su ejemplo
     A3. TRAYECTORIA   línea de tiempo

   PARTE B. FUNCIONAMIENTO
     B1. Utilidades          B5. Gráficos de proyectos
     B2. Datos del sitio     B6. Proyectos y detalle
     B3. Navegación          B7. Trayectoria
     B4. Simulador           B8. Habilidades, animaciones e inicio

   Los textos de Hero, Sobre mí, Habilidades y Contacto están en index.html.
   ===================================================================== */
'use strict';

/* =====================================================================
   PARTE A. CONTENIDO EDITABLE
   ===================================================================== */

/* A1. SITIO ----------------------------------------------------------- */
const SITIO = {
  nombre: 'DaTa Martínez',       // Si lo cambias, actualiza también <title> y las etiquetas meta de index.html

  nombreCompleto: 'David Taborda Martínez', // Ficha de Sobre mí y pie de página

  // Deja '' en lo que todavía no tengas: aparecerá como "por completar".
  correo: 'davidtaborda2000@gmail.com', // Ej.: 'nombre@correo.com'
  linkedin: 'https://www.linkedin.com/in/david-taborda-martinez-916a241b3/', // Ej.: 'https://www.linkedin.com/in/tu-usuario'
  github: 'https://github.com/Datamartinez', // Ej.: 'https://github.com/tu-usuario'
  institucion: 'Fundación Universitaria CEIPA, 2025', // Ej.: 'Universidad X, 2024'
  foto: 'assets/images/retrato.webp', // Vertical, 4:5. Deja '' para no mostrar foto

  hojaDeVida: {
    archivo: 'assets/documents/hoja-de-vida.pdf',
    provisional: false           // Cambia a false cuando reemplaces el PDF por el definitivo
  },

  // true  = muestra lo pendiente con su etiqueta (para trabajar en el sitio)
  // false = oculta todo lo pendiente (para publicar)
  mostrarPendientes: false
};

/* A2. PROYECTOS ---------------------------------------------------------
   Para agregar uno, copia un bloque { ... } y cambia sus datos.

   estado:     'profesional' (trabajo real para un cliente) | 'demostrativo' (datos
               simulados) | 'pendiente' | 'publicado'
   grafico:    'margenes' | 'tablero' | 'regresion' | 'sensibilidad' | 'presupuesto' | ''
   imagen:     ruta de una captura; si existe, reemplaza al gráfico
   resultados: lista de hallazgos o aprendizajes reales. Si está vacía se
               muestra 'resultadoEsperado' identificado como tal.
   enlaces:    [{ texto: 'Ver repositorio', url: 'https://...' }]

   Los proyectos 'profesional' se muestran destacados, antes de los demostrativos,
   con una ficha (cliente, rol, periodo) en lugar de gráfico. En ellos
   'metodologia' se titula "Funciones", 'resultados' se titula "Hallazgos
   principales" y no se muestra un resultado esperado. Opcionales:
   indicadores: { titulo, filas: [['Etiqueta', porcentaje]] } barras en la ficha
   informe:     { titulo, pasos: [...] } método de un entregable concreto
   logo:        ruta del logo del cliente; se muestra sobre fondo blanco y
               siempre a la misma altura (--logo-alto en styles.css)
   metas:       { titulo, resumen, items: [['Plazo', 'Meta']] } metas propias del
               rol; el resumen va en la tarjeta y la lista en el detalle
   --------------------------------------------------------------------- */
const PROYECTOS = [
  {
    nombre: 'Consultoría financiera',
    estado: 'profesional',
    cliente: 'Ministerio Verdad y Vida',
    logo: 'assets/images/logo-mvv.webp',
    rol: 'Consultor financiero',
    periodo: '2026',
    enCurso: true,
    // Solo porcentajes: el ministerio no publica sus cifras
    indicadores: {
      titulo: 'Ejecución frente al presupuesto, enero a octubre de 2026',
      filas: [['Ingresos', 90.5], ['Gastos', 93.0], ['Excedente', 55]]
    },
    descripcion: 'Presupuesto, flujo de caja e informes para la dirección. Entregable más reciente: el análisis financiero y de ejecución presupuestal de enero a octubre de 2026.',
    objetivo: 'Explicar a la dirección por qué el excedente quedó por debajo de lo previsto y qué decisiones conviene priorizar antes del presupuesto 2027.',
    herramientas: ['Power BI', 'Excel', 'PowerPoint'],
    metodologia: [ // Funciones
      'Elaboración y seguimiento del presupuesto.',
      'Control del flujo de caja: ingresos, pagos y disponibilidad de recursos.',
      'Preparación de informes financieros para la dirección.'
    ],
    informe: {
      titulo: 'Cómo hice el informe de enero a octubre',
      pasos: [
        'Extracción de las 11 hojas del reporte de Power BI y verificación contra sus totales.',
        'Comparación entre presupuesto y ejecución por centro de costo y por sede.',
        'Tendencia del excedente frente a los mismos meses de 2020 a 2025.',
        'Revisión de la composición de los pasivos.',
        'Tres escenarios para el cierre del año.'
      ]
    },
    resultados: [
      'Ingresos al 90,5 % y gastos al 93,0 % del presupuesto: el excedente llegó al 55 % de lo previsto.',
      'Dos centros de costo explican el 88 % del faltante de ingresos; 13 de 28 centros cumplieron su meta.',
      'El margen de excedente pasó de 1,6 % a 4,0 % frente a 2025, mientras los ingresos no operacionales cayeron 30 %.',
      'Identifiqué y documenté diferencias entre hojas del reporte fuente antes de concluir.',
      'Cerré con seis decisiones priorizadas por urgencia, cada una con fecha sugerida.'
    ],
    metas: {
      titulo: 'Mis metas para 2027 como consultor',
      resumen: 'Presupuesto aprobado en enero, informes y flujo de caja cada mes, y un único modelo de datos conciliado.',
      items: [
        ['Enero', 'Presupuesto 2027 por centro de costo, con sus supuestos documentados y aprobado por la dirección.'],
        ['Cada mes', 'Informe de ejecución presupuestal para la dirección, con alerta temprana sobre los centros que se desvíen de su meta.'],
        ['Cada mes', 'Flujo de caja proyectado y actualizado, para anticipar necesidades de liquidez antes de que ocurran.'],
        ['Primer trimestre', 'Plan de seguimiento con los dos centros de costo que concentraron el faltante de ingresos en 2026.'],
        ['Primer semestre', 'Un único modelo de datos en Power BI, conciliado con contabilidad, para que todas las hojas del reporte coincidan.'],
        ['Cada trimestre', 'Seguimiento a las seis decisiones priorizadas en el informe de octubre, con su avance reportado a la dirección.']
      ]
    },
    enlaces: []
  },
];

/* A2b. SERVICIOS ---------------------------------------------------------
   Servicios que ofreces. Cada uno se muestra como tarjeta en "Mis servicios"
   y abre un detalle con un ejemplo hecho con datos simulados.

   resumen:     texto corto de la tarjeta
   paraQue:     qué problema resuelve ("Para qué sirve")
   proceso:     pasos de trabajo ("Cómo trabajo")
   entregables: lo que recibe el cliente ("Qué recibes")
   grafico:     ejemplo con datos simulados (ver GRAFICOS en B5)
   referencia:  opcional, dónde ya lo aplicas en un proyecto real
   aviso:       opcional, nota visible en la tarjeta y en el detalle
   --------------------------------------------------------------------- */
const SERVICIOS = [
  {
    nombre: 'Análisis financiero e indicadores',
    resumen: 'Leo los estados financieros y explico qué está moviendo la rentabilidad, la liquidez y el endeudamiento.',
    paraQue: 'Entender la situación financiera de la organización y saber qué señales vigilar antes de tomar decisiones.',
    herramientas: ['Excel', 'Power BI'],
    proceso: [
      'Estandarización de los estados financieros por periodo.',
      'Análisis vertical y horizontal.',
      'Cálculo de indicadores y descomposición de la rentabilidad.',
      'Interpretación y priorización de hallazgos.'
    ],
    entregables: [
      'Informe breve con los indicadores clave y lo que explica cada uno.',
      'Análisis vertical y horizontal de los estados financieros.',
      'Recomendaciones priorizadas por impacto.'
    ],
    grafico: 'margenes'
  },
  {
    nombre: 'Tableros financieros en Power BI',
    resumen: 'Tableros para seguir ingresos, gastos y resultados en una sola vista, con cifras conciliadas contra la fuente.',
    paraQue: 'Reducir el tiempo entre el cierre del mes y la lectura de los resultados, con una sola versión de las cifras.',
    herramientas: ['Power BI', 'SQL', 'Excel'],
    proceso: [
      'Definición de indicadores y preguntas de quien usará el tablero.',
      'Modelo de datos en estrella y tabla de calendario.',
      'Medidas DAX para acumulados y variaciones.',
      'Diseño de la vista y validación de cifras.'
    ],
    entregables: [
      'Tablero en Power BI con los indicadores acordados.',
      'Modelo de datos y medidas DAX documentados.',
      'Validación de las cifras contra la fuente.'
    ],
    grafico: 'tablero'
  },
  {
    nombre: 'Presupuesto y control de ejecución',
    resumen: 'Elaboro el presupuesto y hago seguimiento entre lo presupuestado y lo ejecutado por rubro y centro de costo.',
    paraQue: 'Detectar a tiempo las desviaciones relevantes y reasignar recursos con información confiable.',
    herramientas: ['Excel', 'Power BI'],
    proceso: [
      'Estructura del presupuesto por rubro y centro de costo.',
      'Cargue y conciliación de la ejecución.',
      'Cálculo de variaciones absolutas y relativas.',
      'Revisión de causas y propuesta de ajustes.'
    ],
    entregables: [
      'Presupuesto por rubro y centro de costo.',
      'Formato de seguimiento con alertas por desviación.',
      'Informe periódico de ejecución para la dirección.'
    ],
    referencia: 'Lo aplico hoy como consultor financiero del Ministerio Verdad y Vida.',
    grafico: 'presupuesto'
  },
  {
    nombre: 'Modelación financiera y escenarios',
    resumen: 'Modelos de flujo de caja y valoración que muestran qué supuestos mueven más el resultado.',
    paraQue: 'Comparar alternativas e identificar los supuestos críticos antes de comprometer recursos.',
    herramientas: ['Excel', 'Python'],
    proceso: [
      'Construcción del flujo de caja base.',
      'Definición de rangos para cada supuesto.',
      'Análisis de sensibilidad variable por variable.',
      'Simulación de escenarios y lectura del riesgo.'
    ],
    entregables: [
      'Modelo parametrizado en Excel o Python.',
      'Análisis de sensibilidad y escenarios.',
      'Resumen de los supuestos críticos y su efecto en el resultado.'
    ],
    grafico: 'sensibilidad'
  },
  {
    nombre: 'Análisis de datos con Python',
    resumen: 'Limpieza, exploración y modelos estadísticos para responder preguntas de negocio con tus propios datos.',
    paraQue: 'Medir relaciones entre variables y saber qué tan confiables son antes de usarlas para proyectar.',
    herramientas: ['Python', 'SQL'],
    proceso: [
      'Limpieza y validación de los datos.',
      'Análisis exploratorio y detección de valores atípicos.',
      'Modelos estadísticos, como la regresión, y revisión de sus supuestos.',
      'Documentación en un cuaderno reproducible.'
    ],
    entregables: [
      'Datos depurados y validados.',
      'Cuaderno reproducible con todo el análisis.',
      'Conclusiones y límites del modelo.'
    ],
    grafico: 'regresion'
  },
  {
    nombre: 'Portafolios de inversión: construcción y optimización',
    resumen: 'Modelos que combinan rentabilidad, riesgo y correlación para comparar portafolios y encontrar las combinaciones eficientes.',
    paraQue: 'Ver con datos cómo cambian el riesgo y la rentabilidad de un portafolio según su composición en los mercados financieros.',
    herramientas: ['Python', 'Excel'],
    proceso: [
      'Recolección y depuración de precios históricos.',
      'Cálculo de rentabilidad, volatilidad y correlaciones.',
      'Optimización media-varianza y frontera eficiente.',
      'Pruebas de sensibilidad y comparación con portafolios de referencia.'
    ],
    entregables: [
      'Modelo en Python o Excel con la frontera eficiente.',
      'Comparación de portafolios por riesgo y rentabilidad.',
      'Informe con supuestos, resultados y limitaciones.'
    ],
    aviso: 'Servicio de análisis y modelación. No es asesoría ni recomendación de inversión, y no administro recursos de terceros.',
    grafico: 'portafolio'
  }
];

/* A3. TRAYECTORIA --------------------------------------------------------
   Escribe las entradas de la más reciente a la más antigua.
   tipo:      'experiencia' | 'formacion' | 'cursos' | 'investigacion'
   pendiente: true mientras la entrada no tenga información real
   enlace:    opcional, por ejemplo la URL de un certificado
   imagen:    opcional, { src, alt, pie, ancho, alto }
   puntos:    opcional, lista de funciones o logros
   items:     opcional, lista de elementos (por ejemplo, certificaciones)
   Los campos con '' simplemente no se muestran.
   --------------------------------------------------------------------- */
const TIPOS = {
  experiencia: 'Experiencia',
  formacion: 'Formación',
  cursos: 'Cursos y certificaciones',
  investigacion: 'Investigación'
};

const TRAYECTORIA = [
  {
    tipo: 'experiencia', pendiente: false,
    fecha: 'Actualidad',         // Ej.: 'Ene 2026 – Actualidad'
    titulo: 'Analista Financiero',
    entidad: 'Gerencia de Proyectos Especiales, Alcaldía de Bello, Antioquia',
    descripcion: '',
    puntos: [],                  // Funciones y logros que puedas sustentar
    imagen: { src: 'assets/images/equipo-alcaldia.webp', ancho: 895, alto: 559,
      alt: 'Tres personas sentadas en una reunión, dos de ellas con chaleco de la Alcaldía de Bello',
      pie: 'Jornada de trabajo, Alcaldía de Bello' },
    enlace: ''
  },
  {
    tipo: 'experiencia', pendiente: false,
    fecha: 'Feb 2025 – Nov 2025',
    titulo: 'Auxiliar de Cartera Poblacional',
    entidad: 'ESE Hospital Marco Fidel Suárez',
    descripcion: '',
    puntos: [
      'Gestión y seguimiento de cartera de entidades de salud y aseguradoras.',
      'Revisión, análisis y gestión de glosas, con elaboración y seguimiento de respuestas.',
      'Conciliación de cuentas y validación de soportes.',
      'Seguimiento a procesos de reclamación y recuperación de cartera.',
      'Análisis de información financiera y administrativa para apoyar la gestión de cartera.'
    ],
    imagen: { src: 'assets/images/equipo-hospital.webp', ancho: 960, alto: 600,
      alt: 'Equipo de once personas, la mayoría con uniforme azul oscuro, posando juntas',
      pie: 'Con el equipo de trabajo, ESE Hospital Marco Fidel Suárez' },
    enlace: ''
  },
  {
    tipo: 'experiencia', pendiente: false,
    fecha: 'Ene 2024 – Dic 2024',
    titulo: 'Asistente Administrativo',
    entidad: 'JACAT S.A.S',
    descripcion: 'Organización de expedientes, contratos y documentos legales, radicación y digitalización, y atención al usuario.',
    enlace: ''
  },
  {
    tipo: 'experiencia', pendiente: false,
    fecha: 'Abr 2021 – May 2023',
    titulo: 'Cajero y supervisor',
    entidad: 'La Perla Restaurante',
    descripcion: 'Manejo de caja y personal, gestión de inventarios, pago a proveedores y atención a clientes.',
    enlace: ''
  },
  {
    tipo: 'formacion', pendiente: false,
    fecha: '2025',
    titulo: 'Administrador Financiero',
    entidad: 'Fundación Universitaria CEIPA',
    descripcion: '',
    enlace: ''
  },
  // En items: 'detalle' es entidad, fecha y duración; 'enlace' es la URL de verificación.
  {
    tipo: 'cursos', pendiente: false,
    fecha: '', titulo: 'Datos y tecnología', entidad: '', descripcion: '',
    items: [
      { texto: 'SQL TOTAL: bases de datos', detalle: 'Udemy, julio de 2026, 7,5 h', enlace: 'https://ude.my/UC-1b39da11-8ae5-4898-92a5-69bf4c16a760' },
      { texto: 'Power BI TOTAL: analista de datos', detalle: 'Udemy, junio de 2026, 15,5 h', enlace: 'https://ude.my/UC-74871e5e-913d-44b5-bfbe-03012afac0e8' },
      { texto: 'Python para Data Science & Machine Learning', detalle: 'Udemy', enlace: '' },
      { texto: 'Prompt Engineering con ChatGPT (IA) en Negocios y Finanzas', detalle: 'Udemy, mayo de 2026, 36,5 h', enlace: 'https://ude.my/UC-6612fee9-f19a-451a-8864-d6d307f89dec' },
      { texto: 'Transformación Digital y Habilidades Digitales', detalle: 'CEIPA, noviembre de 2025, 30 h', enlace: '' },
      { texto: 'Microsoft Office 2016: Excel', detalle: 'SENA, octubre de 2020, 40 h', enlace: '' }
    ],
    enlace: ''
  },
  {
    tipo: 'cursos', pendiente: false,
    fecha: '', titulo: 'Gestión y negocios', entidad: '', descripcion: '',
    items: [
      { texto: 'Gerente Administrativo y Financiero', detalle: 'Udemy, abril de 2026, 5,5 h', enlace: 'https://ude.my/UC-047e92c7-2ea3-4fda-8b22-b3abbf26e3ab' },
      { texto: 'Diplomado Fortalecimiento en emprendimiento e innovación', detalle: 'Sapiencia, diciembre de 2023, 120 h', enlace: '' },
      { texto: 'Planeación estratégica de negocios electrónicos', detalle: 'SENA, noviembre de 2020, 40 h', enlace: '' },
      { texto: 'Diplomatura en Mercadeo Digital', detalle: 'Universidad Pontificia Bolivariana, abril de 2020, 152 h', enlace: '' }
    ],
    enlace: ''
  },
  {
    tipo: 'cursos', pendiente: false,
    fecha: '', titulo: 'Inglés', entidad: '', descripcion: '',
    items: [
      { texto: 'Nivel B2 (MCER)', detalle: 'TrackTest, Idiomas EAFIT, marzo de 2025', enlace: '' },
      { texto: 'English Dot Works 9', detalle: 'SENA, agosto de 2019, 60 h', enlace: '' }
    ],
    enlace: ''
  },
  {
    tipo: 'investigacion', pendiente: true,
    fecha: 'Año',
    titulo: 'Proyecto de investigación',
    entidad: 'Grupo, semillero o institución',
    descripcion: 'Pregunta de investigación, método y principal aprendizaje.',
    enlace: ''
  }
];

/* =====================================================================
   PARTE B. FUNCIONAMIENTO
   ===================================================================== */

/* B1. UTILIDADES -------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const num = (v, dec = 0) => v.toLocaleString('es-CO', { minimumFractionDigits: dec, maximumFractionDigits: dec });
const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

let avisoTimer;
function avisar(texto) {
  const el = $('#aviso');
  el.textContent = texto;
  el.classList.add('is-visible');
  clearTimeout(avisoTimer);
  avisoTimer = setTimeout(() => el.classList.remove('is-visible'), 4200);
}

/* B2. DATOS DEL SITIO ----------------------------------------------------- */
function aplicarDatos() {
  $$('[data-bind]').forEach((el) => { el.textContent = SITIO[el.dataset.bind]; });
  $('#anio').textContent = new Date().getFullYear();

  const nombres = { correo: 'correo', linkedin: 'perfil de LinkedIn', github: 'perfil de GitHub' };

  $$('[data-link]').forEach((a) => {
    const clave = a.dataset.link;
    const valor = SITIO[clave].trim();

    if (valor) {
      a.href = clave === 'correo' ? `mailto:${valor}` : valor;
      if (clave !== 'correo') { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      return;
    }
    if (!SITIO.mostrarPendientes) { a.closest('li').hidden = true; return; }

    a.classList.add('is-pending');
    a.addEventListener('click', (e) => {
      e.preventDefault();
      avisar(`Falta el ${nombres[clave]}. Agrégalo en SITIO, dentro de js/main.js.`);
    });
  });

  $$('[data-link-text]').forEach((el) => {
    const valor = SITIO[el.dataset.linkText].trim();
    if (valor) el.textContent = valor.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  });

  // Institución en la ficha
  const inst = $('[data-bind-pending="institucion"]');
  if (SITIO.institucion) inst.textContent = `, ${SITIO.institucion}`;
  else if (SITIO.mostrarPendientes) inst.innerHTML = ' <span class="tag tag--pending">Institución por completar</span>';

  // Foto opcional
  if (SITIO.foto) {
    const img = new Image();
    img.src = SITIO.foto;
    img.alt = `Retrato de ${SITIO.nombreCompleto}`;
    img.loading = 'lazy';
    img.width = 696;
    img.height = 870;
    $('#foto').append(img);
    $('#foto').hidden = false;
  }

  // Hoja de vida
  const cv = $('[data-cv]');
  cv.href = SITIO.hojaDeVida.archivo;
  if (SITIO.hojaDeVida.provisional) {
    if (SITIO.mostrarPendientes) {
      const nota = $('[data-cv-note]');
      nota.textContent = 'El PDF actual es provisional. Reemplázalo en assets/documents.';
      nota.hidden = false;
    } else {
      cv.hidden = true;
    }
  }

  // Copiar correo
  const copiar = $('#copiar-correo');
  if (!SITIO.correo) copiar.hidden = true;
  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(SITIO.correo);
      avisar('Correo copiado.');
    } catch {
      avisar(`No se pudo copiar. El correo es ${SITIO.correo}`);
    }
  });
}

/* B3. NAVEGACIÓN ------------------------------------------------------------ */
function iniciarNavegacion() {
  const cab = $('#cabecera');
  const boton = $('.menu-toggle');
  const enlaces = $$('.nav a').filter((a) => !a.closest('li').hidden);
  const fondo = [$('#contenido'), $('.footer')];
  const escritorio = window.matchMedia('(min-width: 900px)');

  const alternar = (abrir) => {
    cab.classList.toggle('is-open', abrir);
    document.body.classList.toggle('is-locked', abrir);
    boton.setAttribute('aria-expanded', String(abrir));
    boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
    fondo.forEach((el) => { el.inert = abrir; }); // El foco no sale del menú abierto
  };
  boton.addEventListener('click', () => alternar(!cab.classList.contains('is-open')));
  enlaces.forEach((a) => a.addEventListener('click', () => alternar(false)));
  $('.brand').addEventListener('click', () => alternar(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cab.classList.contains('is-open')) { alternar(false); boton.focus(); }
  });
  escritorio.addEventListener('change', () => alternar(false));

  // Estado de la cabecera y sección activa
  const secciones = enlaces.map((a) => $(a.getAttribute('href')));
  let pendiente = false;
  const actualizar = () => {
    pendiente = false;
    cab.classList.toggle('is-scrolled', window.scrollY > 24);

    const linea = window.innerHeight * 0.4;
    let activa = -1;
    secciones.forEach((s, i) => { if (s.getBoundingClientRect().top <= linea) activa = i; });
    const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (alFinal && window.scrollY > 0) activa = secciones.length - 1;

    enlaces.forEach((a, i) => {
      if (i === activa) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  const pedir = () => { if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); } };
  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir);
  actualizar();
}

/* B4. SIMULADOR ----------------------------------------------------------------
   Movimiento browniano geométrico. Con base 100, crecimiento anual g y
   volatilidad s, el percentil z en t años es:
       100 * exp((ln(1+g) - s²/2) * t + z * s * raíz(t))
   --------------------------------------------------------------------------- */
const MODELO = {
  historia: [88.4, 89.9, 89.1, 91.6, 93.2, 92.1, 94.0, 95.8, 94.9, 96.7, 98.9, 98.1, 100], // Serie simulada
  meses: 24,
  valor({ g, s }, mes, z) {
    const t = mes / 12;
    return 100 * Math.exp((Math.log(1 + g) - (s * s) / 2) * t + z * s * Math.sqrt(t));
  },
  probabilidad({ g, s, m }) {
    const t = this.meses / 12;
    const d = (Math.log(m / 100) - (Math.log(1 + g) - (s * s) / 2) * t) / (s * Math.sqrt(t));
    return 1 - normal(d);
  }
};

// Distribución normal acumulada (Abramowitz y Stegun 26.2.17)
function normal(x) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989422804 * Math.exp(-x * x / 2);
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return x > 0 ? 1 - p : p;
}

function iniciarSimulador() {
  const caja = $('#sim-plot');
  const ctrl = { g: $('#sim-g'), s: $('#sim-s'), m: $('#sim-m') };
  const Z90 = 1.2816;
  const Z75 = 0.6745;
  let escala = null;
  let raf = 0;

  const leer = () => ({ g: +ctrl.g.value / 100, s: +ctrl.s.value / 100, m: +ctrl.m.value });
  let actual = leer();

  caja.innerHTML = '<svg role="img" aria-labelledby="sim-desc"><title id="sim-desc">Abanico de escenarios</title><g></g></svg><div class="sim__tip" hidden></div>';
  const svg = $('svg', caja);
  const capa = $('g', svg);
  const tip = $('.sim__tip', caja);

  function dibujar(p, cursor = null) {
    const W = caja.clientWidth;
    const H = W < 560 ? 230 : 290;
    const M = { t: 12, r: 62, b: 28, l: 34 };
    const maxY = Math.max(MODELO.valor(p, MODELO.meses, Z90), p.m, 125) * 1.04;
    const minY = Math.min(MODELO.valor(p, MODELO.meses, -Z90), 86) * 0.96;
    const x = (mes) => M.l + ((mes + 12) / (12 + MODELO.meses)) * (W - M.l - M.r);
    const y = (v) => M.t + (1 - (v - minY) / (maxY - minY)) * (H - M.t - M.b);
    escala = { M, W, H };

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('height', H);

    const futuro = Array.from({ length: MODELO.meses + 1 }, (_, i) => i);
    const linea = (z) => futuro.map((mes) => `${x(mes).toFixed(1)},${y(MODELO.valor(p, mes, z)).toFixed(1)}`);
    const banda = (z) => `M${linea(z).join('L')}L${linea(-z).reverse().join('L')}Z`;

    // Rejilla
    const paso = maxY - minY > 130 ? 50 : 20;
    let s = '';
    for (let v = Math.ceil(minY / paso) * paso; v <= maxY; v += paso) {
      s += `<line x1="${M.l}" x2="${W - M.r}" y1="${y(v)}" y2="${y(v)}" stroke="#F1F5F9" stroke-opacity=".09"/>`;
      s += `<text x="${M.l - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
    }
    [[-12, '−12 m', 'start'], [0, 'Hoy', 'middle'], [12, '+12 m', 'middle'], [24, '+24 m', 'middle']].forEach(([mes, t, a]) => {
      s += `<text x="${x(mes)}" y="${H - 6}" text-anchor="${a}"${mes === 0 ? ' class="t-strong"' : ''}>${t}</text>`;
    });

    // Abanico
    s += `<path d="${banda(Z90)}" fill="#14B8A6" fill-opacity=".17"/>`;
    s += `<path d="${banda(Z75)}" fill="#14B8A6" fill-opacity=".24"/>`;
    s += `<line x1="${x(0)}" x2="${x(0)}" y1="${M.t}" y2="${H - M.b + 6}" stroke="#F1F5F9" stroke-opacity=".3"/>`;

    // Meta
    s += `<line x1="${M.l}" x2="${W - M.r}" y1="${y(p.m)}" y2="${y(p.m)}" stroke="#93B4FF" stroke-width="1.5" stroke-dasharray="5 5"/>`;
    s += `<text x="${M.l + 4}" y="${y(p.m) - 7}" style="fill:#93B4FF;font-weight:600">Meta ${num(p.m)}</text>`;

    // Historia y escenario central
    const hist = MODELO.historia.map((v, i) => `${x(i - 12).toFixed(1)},${y(v).toFixed(1)}`).join('L');
    s += `<path d="M${hist}" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>`;
    s += `<path d="M${linea(0).join('L')}" fill="none" stroke="#14B8A6" stroke-width="2.5"/>`;
    s += `<circle cx="${x(0)}" cy="${y(100)}" r="4.5" fill="#FFFFFF" stroke="#101827" stroke-width="2"/>`;

    // Etiquetas finales, separadas al menos 15px
    const fin = [[Z90, 'P90'], [0, 'P50'], [-Z90, 'P10']].map(([z, t]) => ({ t, v: MODELO.valor(p, MODELO.meses, z) }));
    const pos = fin.map((f) => y(f.v) + 4);
    pos[0] = Math.min(pos[0], pos[1] - 15);
    pos[2] = Math.max(pos[2], pos[1] + 15);
    fin.forEach((f, i) => {
      s += `<text x="${W - M.r + 8}" y="${pos[i]}"${i === 1 ? ' class="t-strong"' : ''}>${f.t} ${num(f.v)}</text>`;
    });

    // Cursor
    if (cursor !== null) {
      s += `<line x1="${x(cursor)}" x2="${x(cursor)}" y1="${M.t}" y2="${H - M.b}" stroke="#F1F5F9" stroke-opacity=".55"/>`;
      const puntos = cursor < 0 ? [MODELO.historia[cursor + 12]] : [Z90, 0, -Z90].map((z) => MODELO.valor(p, cursor, z));
      puntos.forEach((v, i) => {
        const color = cursor < 0 ? '#FFFFFF' : i === 1 ? '#14B8A6' : '#8FD9CF';
        s += `<circle cx="${x(cursor)}" cy="${y(v)}" r="4" fill="${color}" stroke="#101827" stroke-width="2"/>`;
      });
    }
    capa.innerHTML = s;
    return { x };
  }

  function textos(p) {
    const prob = Math.round(MODELO.probabilidad(p) * 100);
    $('#out-g').textContent = `${num(p.g * 100)} %`;
    $('#out-s').textContent = `${num(p.s * 100)} %`;
    $('#out-m').textContent = num(p.m);
    $('#sim-prob').textContent = prob >= 100 ? '>99 %' : prob <= 0 ? '<1 %' : `${prob} %`;
    ctrl.g.setAttribute('aria-valuetext', `${Math.round(p.g * 100)} por ciento`);
    ctrl.s.setAttribute('aria-valuetext', `${Math.round(p.s * 100)} por ciento`);
    return prob;
  }

  function lectura(p) {
    const prob = textos(p);
    const central = num(MODELO.valor(p, MODELO.meses, 0));
    const p10 = num(MODELO.valor(p, MODELO.meses, -Z90));
    const tono = prob >= 75 ? 'La meta es alcanzable en la mayoría de escenarios.'
      : prob >= 45 ? 'La meta es exigente: conviene un plan alterno.'
        : 'La meta depende de condiciones poco probables.';
    const texto = `El escenario central llega a ${central}. En un caso adverso (P10) el valor sería ${p10}. ${tono}`;
    $('#sim-texto').textContent = texto;
    $('#sim-desc').textContent = `Abanico de escenarios a 24 meses. ${texto} Probabilidad de alcanzar ${num(p.m)}: ${prob} %.`;
  }

  // Transición suave entre estados, medida en tiempo para que dure lo mismo en cualquier pantalla
  function animarHacia(meta, duracion = 260) {
    cancelAnimationFrame(raf);
    if (sinMovimiento.matches || document.hidden) { actual = { ...meta }; dibujar(actual); return; }
    const desde = { ...actual };
    const inicio = performance.now();
    const cuadro = () => {
      const k = Math.min(1, (performance.now() - inicio) / duracion);
      const e = 1 - (1 - k) ** 3;
      for (const c of ['g', 's', 'm']) actual[c] = desde[c] + (meta[c] - desde[c]) * e;
      dibujar(actual);
      if (k < 1) raf = requestAnimationFrame(cuadro);
    };
    raf = requestAnimationFrame(cuadro);
  }

  Object.values(ctrl).forEach((input) => {
    input.addEventListener('input', () => { textos(leer()); animarHacia(leer()); });
    input.addEventListener('change', () => lectura(leer()));
  });

  // Lectura por mes con el puntero
  svg.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(raf);
    actual = leer();
    const { M, W } = escala;
    const px = e.clientX - svg.getBoundingClientRect().left;
    const mes = Math.round(((px - M.l) / (W - M.l - M.r)) * (12 + MODELO.meses)) - 12;
    const c = Math.max(-12, Math.min(MODELO.meses, mes));
    const { x } = dibujar(actual, c);
    tip.innerHTML = c < 0
      ? `Hace ${-c} ${c === -1 ? 'mes' : 'meses'}<br><b>${num(MODELO.historia[c + 12], 1)}</b> histórico simulado`
      : c === 0 ? 'Hoy<br><b>100</b> valor base'
        : `En ${c} ${c === 1 ? 'mes' : 'meses'}<br>P90 <b>${num(MODELO.valor(actual, c, Z90), 1)}</b><br>P50 <b>${num(MODELO.valor(actual, c, 0), 1)}</b><br>P10 <b>${num(MODELO.valor(actual, c, -Z90), 1)}</b>`;
    tip.hidden = false;
    const aIzquierda = x(c) + tip.offsetWidth + 16 > W;
    tip.style.transform = `translate(${aIzquierda ? x(c) - tip.offsetWidth - 12 : x(c) + 12}px, 14px)`;
  });
  svg.addEventListener('pointerleave', () => { tip.hidden = true; dibujar(actual); });

  new ResizeObserver(() => dibujar(actual)).observe(caja);

  lectura(leer());
  dibujar(actual);
  // Apertura del abanico al cargar
  if (!sinMovimiento.matches && !document.hidden) {
    actual = { ...leer(), s: 0.005 };
    animarHacia(leer(), 1300);
  }
}

/* B5. GRÁFICOS DE PROYECTOS (Chart.js) ---------------------------------------------
   Todas las cifras son simuladas. Cada gráfico define su título, la tabla
   de datos equivalente y la configuración.
   ------------------------------------------------------------------------------- */
const CHART_URL = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js';
const COLOR = { azul: '#1D4ED8', teal: '#0D9488', navy: '#101827', texto: '#475569', rejilla: '#E2E8F0' };
const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const DATOS = {
  anios: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5'],
  operativo: [11.2, 12.6, 12.1, 14.3, 15.8],
  neto: [5.4, 6.3, 5.6, 7.7, 8.9],
  ingresos: [92, 88, 97, 101, 99, 106, 110, 108, 113, 117, 115, 124],
  gastos: [78, 77, 81, 83, 85, 86, 89, 92, 91, 94, 96, 99],
  dispersion: [[8, 41], [11, 46], [13, 44], [15, 53], [18, 51], [20, 60], [23, 57], [25, 66], [27, 63], [30, 72], [33, 69], [35, 78], [38, 74], [41, 85], [44, 82], [47, 91]],
  variables: ['Precio', 'Volumen', 'Costo variable', 'Tasa de descuento', 'Gasto fijo'],
  baja: [-38, -24, 21, 13, 8],
  sube: [38, 24, -21, -12, -8],
  rubros: ['Personal', 'Operación', 'Tecnología', 'Mercadeo', 'Formación'],
  presupuesto: [180, 120, 75, 60, 25],
  ejecutado: [176, 134, 69, 66, 18],
  // Portafolio: [volatilidad %, rentabilidad esperada %] de tres activos genéricos
  activos: [['Renta fija', 4, 5], ['Acciones locales', 14, 9], ['Acciones globales', 19, 12]],
  frontera: [[3.9, 5.3], [4.0, 5.5], [4.3, 6.0], [5.1, 6.5], [6.0, 7.0], [7.0, 7.5], [8.2, 8.0], [9.4, 8.5], [10.6, 9.0], [11.8, 9.5], [13.1, 10.0], [14.4, 10.5], [15.7, 11.0], [17.1, 11.5], [18.9, 12.0]],
  combinaciones: [[9.8, 8.5], [14.8, 10.5], [13.6, 9.5], [10.5, 8.8], [12.0, 9.5], [12.9, 9.3], [10.3, 8.1], [13.6, 10.0], [5.5, 6.7], [5.4, 6.3], [8.0, 7.8], [16.7, 11.2], [11.1, 8.9], [4.4, 6.0], [13.4, 10.0], [15.0, 10.7], [9.1, 8.0], [8.7, 8.2], [13.2, 9.6], [10.7, 8.9], [8.8, 8.0], [6.0, 7.0], [5.0, 6.1], [12.7, 9.7], [13.7, 9.2], [11.0, 9.0], [13.5, 9.2], [11.3, 9.2], [12.9, 9.8], [15.6, 10.7], [14.4, 10.4], [15.1, 10.7], [11.2, 8.3], [12.3, 9.4], [16.3, 11.1], [10.6, 9.0], [14.2, 10.4], [10.8, 8.2], [12.4, 9.2], [7.7, 7.7], [6.6, 7.2], [12.4, 9.6], [14.0, 10.3], [11.2, 8.5], [9.7, 8.4], [17.2, 11.5], [5.9, 6.8], [11.7, 9.4], [11.6, 8.4], [14.6, 10.4], [5.6, 6.6], [9.4, 8.4], [6.2, 6.9], [5.0, 6.4]]
};

function regresion(pares) {
  const n = pares.length;
  const mx = pares.reduce((a, [x]) => a + x, 0) / n;
  const my = pares.reduce((a, [, y]) => a + y, 0) / n;
  const b = pares.reduce((a, [x, y]) => a + (x - mx) * (y - my), 0) / pares.reduce((a, [x]) => a + (x - mx) ** 2, 0);
  return { a: my - b * mx, b };
}

function opciones(extra = {}) {
  const { x = {}, y = {}, plugins = {}, ...resto } = extra;
  const eje = { border: { display: false }, ticks: { color: COLOR.texto, font: { size: 12 }, maxRotation: 0, autoSkipPadding: 12, padding: 6 }, grid: { color: COLOR.rejilla, drawTicks: false } };
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: sinMovimiento.matches ? false : { duration: 800 },
    interaction: { mode: 'index', intersect: false },
    ...resto,
    plugins: {
      legend: { align: 'start', labels: { usePointStyle: true, boxHeight: 7, color: COLOR.texto, font: { size: 12, weight: 600 }, padding: 12 } },
      tooltip: { backgroundColor: COLOR.navy, padding: 10, cornerRadius: 6, usePointStyle: true, boxPadding: 6, titleFont: { size: 12 }, bodyFont: { size: 12 } },
      ...plugins
    },
    scales: {
      x: { ...eje, ...x, ticks: { ...eje.ticks, ...x.ticks }, grid: { ...eje.grid, ...x.grid }, title: { color: COLOR.texto, ...x.title } },
      y: { ...eje, ...y, ticks: { ...eje.ticks, ...y.ticks }, grid: { ...eje.grid, ...y.grid }, title: { color: COLOR.texto, ...y.title } }
    }
  };
}

const etiqueta = (sufijo) => ({ callbacks: { label: (c) => ` ${c.dataset.label}: ${num(c.parsed.y, 1)}${sufijo}` } });
const tooltip = (base, extra) => ({ ...base.plugins.tooltip, ...extra });

function conTooltip(op, extra) {
  op.plugins.tooltip = tooltip(op, extra);
  return op;
}

const GRAFICOS = {
  margenes: {
    titulo: 'Margen operativo y neto, % de ingresos (simulado)',
    tabla: () => [['Periodo', 'Margen operativo %', 'Margen neto %'], ...DATOS.anios.map((a, i) => [a, num(DATOS.operativo[i], 1), num(DATOS.neto[i], 1)])],
    config: () => {
      const serie = (label, data, color, punto) => ({ label, data, borderColor: color, backgroundColor: color, borderWidth: 2, pointStyle: punto, pointRadius: 4, pointHoverRadius: 6, tension: 0.25 });
      return {
        type: 'line',
        data: { labels: DATOS.anios, datasets: [serie('Operativo', DATOS.operativo, COLOR.azul, 'circle'), serie('Neto', DATOS.neto, COLOR.teal, 'rectRot')] },
        options: conTooltip(opciones({ x: { offset: true, grid: { display: false } }, y: { beginAtZero: true, ticks: { callback: (v) => `${v} %`, maxTicksLimit: 5 } } }), etiqueta(' %'))
      };
    }
  },

  tablero: {
    titulo: 'Ingresos y gastos mensuales, millones (simulado)',
    kpis: () => {
      const suma = (l) => l.reduce((a, b) => a + b, 0);
      const i = suma(DATOS.ingresos);
      const g = suma(DATOS.gastos);
      return [['Ingresos', num(i)], ['Gastos', num(g)], ['Margen', `${num(((i - g) / i) * 100, 1)} %`]];
    },
    tabla: () => [['Mes', 'Ingresos', 'Gastos'], ...MESES.map((m, i) => [m, num(DATOS.ingresos[i]), num(DATOS.gastos[i])])],
    config: () => {
      const serie = (label, data, color) => ({ label, data, backgroundColor: color, borderRadius: 3, categoryPercentage: 0.72, barPercentage: 0.88, maxBarThickness: 18 });
      return {
        type: 'bar',
        data: { labels: MESES, datasets: [serie('Ingresos', DATOS.ingresos, COLOR.azul), serie('Gastos', DATOS.gastos, COLOR.teal)] },
        options: conTooltip(opciones({ x: { grid: { display: false } }, y: { beginAtZero: true, ticks: { maxTicksLimit: 5 } } }), etiqueta(''))
      };
    }
  },

  regresion: {
    titulo: 'Ingresos según inversión comercial, millones (simulado)',
    tabla: () => [['Inversión', 'Ingresos'], ...DATOS.dispersion.map(([x, y]) => [num(x), num(y)])],
    config: () => {
      const { a, b } = regresion(DATOS.dispersion);
      const punta = (x) => ({ x, y: a + b * x });
      return {
        type: 'scatter',
        data: {
          datasets: [
            { label: 'Observaciones', data: DATOS.dispersion.map(([x, y]) => ({ x, y })), backgroundColor: COLOR.azul, borderColor: '#F8FAFC', borderWidth: 1.5, pointRadius: 5, pointHoverRadius: 7 },
            { label: 'Tendencia', type: 'line', data: [punta(5), punta(50)], borderColor: COLOR.teal, backgroundColor: COLOR.teal, borderWidth: 2, pointRadius: 0, pointHitRadius: 0, pointStyle: 'line' }
          ]
        },
        options: conTooltip(
          opciones({ interaction: { mode: 'nearest', intersect: false }, x: { min: 0, max: 50, grid: { display: false }, ticks: { maxTicksLimit: 6 } }, y: { beginAtZero: true, ticks: { maxTicksLimit: 5 } } }),
          { filter: (c) => c.datasetIndex === 0, callbacks: { label: (c) => ` Inversión ${num(c.parsed.x)}, ingresos ${num(c.parsed.y)}` } }
        )
      };
    }
  },

  sensibilidad: {
    titulo: 'Cambio en el VPN ante ±10 %, millones (simulado)',
    tabla: () => [['Variable', 'Si baja 10 %', 'Si sube 10 %'], ...DATOS.variables.map((v, i) => [v, num(DATOS.baja[i]), num(DATOS.sube[i])])],
    config: () => {
      const serie = (label, data, color) => ({ label, data, backgroundColor: color, borderRadius: 3, barPercentage: 0.8, categoryPercentage: 0.8, grouped: false, maxBarThickness: 20 });
      return {
        type: 'bar',
        data: { labels: DATOS.variables, datasets: [serie('Baja 10 %', DATOS.baja, COLOR.teal), serie('Sube 10 %', DATOS.sube, COLOR.azul)] },
        options: conTooltip(
          opciones({ indexAxis: 'y', interaction: { mode: 'index', axis: 'y', intersect: false }, x: { min: -40, max: 40, ticks: { stepSize: 20 } }, y: { grid: { display: false } } }),
          { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.x > 0 ? '+' : '−'}${num(Math.abs(c.parsed.x))}` } }
        )
      };
    }
  },

  presupuesto: {
    titulo: 'Ejecutado frente a presupuesto, millones (simulado)',
    tabla: () => [['Rubro', 'Presupuesto', 'Ejecutado', 'Variación'], ...DATOS.rubros.map((r, i) => {
      const d = DATOS.ejecutado[i] - DATOS.presupuesto[i];
      return [r, num(DATOS.presupuesto[i]), num(DATOS.ejecutado[i]), `${d > 0 ? '+' : '−'}${num(Math.abs(d))}`];
    })],
    config: () => ({
      type: 'bar',
      data: {
        labels: DATOS.rubros,
        datasets: [
          { label: 'Presupuesto', type: 'line', data: DATOS.presupuesto, showLine: false, pointStyle: 'line', rotation: 90, pointRadius: 11, pointHoverRadius: 11, borderColor: COLOR.navy, backgroundColor: COLOR.navy, pointBorderWidth: 3, pointHoverBorderWidth: 3 },
          { label: 'Ejecutado', data: DATOS.ejecutado, backgroundColor: COLOR.azul, borderRadius: 3, barPercentage: 0.6, maxBarThickness: 16 }
        ]
      },
      options: conTooltip(
        opciones({ indexAxis: 'y', interaction: { mode: 'index', axis: 'y', intersect: false }, x: { beginAtZero: true, max: 200, ticks: { stepSize: 50 } }, y: { grid: { display: false } } }),
        { callbacks: { label: (c) => ` ${c.dataset.label}: ${num(c.parsed.x)}` } }
      )
    })
  },

  portafolio: {
    titulo: 'Rentabilidad esperada según volatilidad anual, % (simulado)',
    tabla: () => [['Portafolio', 'Volatilidad %', 'Rentabilidad esperada %'],
      ...DATOS.activos.map(([n, r, m]) => [`${n} (100 %)`, num(r, 1), num(m, 1)]),
      ...DATOS.frontera.map(([r, m], i) => [i ? `Frontera ${i}` : 'Mínimo riesgo', num(r, 1), num(m, 1)])],
    config: () => {
      const xy = ([x, y]) => ({ x, y });
      return {
        type: 'scatter',
        data: {
          datasets: [
            { label: 'Frontera eficiente', type: 'line', data: DATOS.frontera.map(xy), borderColor: COLOR.teal, backgroundColor: COLOR.teal, borderWidth: 2, pointRadius: 0, pointHoverRadius: 5, pointHitRadius: 6, tension: 0.3, pointStyle: 'line', order: 1 },
            { label: 'Activos', data: DATOS.activos.map(([n, x, y]) => ({ x, y, n })), backgroundColor: COLOR.navy, borderColor: '#F8FAFC', borderWidth: 2, pointStyle: 'rectRot', pointRadius: 7, pointHoverRadius: 9, order: 0 },
            { label: 'Combinaciones posibles', data: DATOS.combinaciones.map(xy), backgroundColor: 'rgba(29, 78, 216, .28)', borderWidth: 0, pointRadius: 3.5, pointHoverRadius: 5, order: 2 }
          ]
        },
        options: conTooltip(
          opciones({ interaction: { mode: 'nearest', intersect: true }, x: { min: 0, max: 20, grid: { display: false }, ticks: { stepSize: 5, callback: (v) => `${v} %` } }, y: { min: 4, max: 13, ticks: { stepSize: 2, callback: (v) => `${v} %` } } }),
          { callbacks: { label: (c) => ` ${c.raw.n || c.dataset.label}: riesgo ${num(c.parsed.x, 1)} %, rentabilidad ${num(c.parsed.y, 1)} %` } }
        )
      };
    }
  }
};

let chartPromesa;
function cargarChart() {
  chartPromesa ??= new Promise((ok, error) => {
    const s = document.createElement('script');
    s.src = CHART_URL;
    s.onload = () => {
      window.Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
      ok(window.Chart);
    };
    s.onerror = () => { chartPromesa = undefined; error(new Error('Chart.js no disponible')); };
    document.head.append(s);
  });
  return chartPromesa;
}

async function pintarGrafico(canvas) {
  const def = GRAFICOS[canvas.dataset.grafico];
  try {
    const Chart = await cargarChart();
    if (!canvas.isConnected || Chart.getChart(canvas)) return;
    new Chart(canvas, def.config());
  } catch {
    const caja = canvas.parentElement;
    caja.classList.add('chart-box--fallback');
    caja.textContent = 'El gráfico no se pudo cargar. Revisa la conexión a internet.';
  }
}

/* B6. PROYECTOS Y DETALLE --------------------------------------------------------- */
const ESTADOS = {
  profesional: ['Proyecto profesional', 'tag tag--live'],
  demostrativo: ['Proyecto demostrativo', 'tag'],
  servicio: ['Servicio', 'tag'],
  pendiente: ['Pendiente de completar', 'tag tag--pending'],
  publicado: ['Publicado', 'tag tag--live']
};

const estadoHTML = (p) => {
  const [texto, clase] = ESTADOS[p.estado] || ESTADOS.pendiente;
  return `<span class="${clase}">${texto}</span>`;
};

const esProfesional = (p) => p.estado === 'profesional';

// Ficha de un proyecto profesional: cliente, rol, periodo y ejes del trabajo
function fichaHTML(p) {
  const fila = (k, v) => v ? `<div><dt>${k}</dt><dd>${v}</dd></div>` : '';
  const periodo = esc(p.periodo || '') + (p.enCurso ? ' <span class="ficha__live">En curso</span>' : '');
  const ind = p.indicadores;
  const pct = (v) => v.toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' %';
  const logo = p.logo ? `<div class="ficha__logo"><img src="${esc(p.logo)}" alt="Logo de ${esc(p.cliente || p.nombre)}" width="245" height="180" loading="lazy"></div>` : '';
  return `${logo}<dl class="ficha">${fila('Cliente', esc(p.cliente || ''))}${fila('Rol', esc(p.rol || ''))}${fila('Periodo', periodo)}</dl>
    ${ind ? `<figure class="ficha__barras">
      <figcaption>${esc(ind.titulo)}</figcaption>
      <dl>${ind.filas.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd><span class="ficha__pista"><span style="width:${Math.min(v, 100)}%"></span></span><b>${pct(v)}</b></dd></div>`).join('')}</dl>
      <p>100 % = lo presupuestado</p>
    </figure>`
    : p.ejes?.length ? `<ol class="ficha__ejes" aria-label="Ejes del trabajo">${p.ejes.map((e) => `<li>${esc(e)}</li>`).join('')}</ol>` : ''}`;
}

function visualHTML(p) {
  if (esProfesional(p)) return fichaHTML(p);
  if (p.imagen) return `<img src="${esc(p.imagen)}" alt="${esc(p.imagenAlt || p.nombre)}" loading="lazy">`;
  const g = GRAFICOS[p.grafico];
  if (!g) return '';
  const kpis = g.kpis ? `<dl class="kpis">${g.kpis().map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>` : '';
  return `<p class="chart-title">${g.titulo}</p>${kpis}
    <div class="chart-box"><canvas data-grafico="${p.grafico}" role="img" aria-label="${esc(g.titulo)}. Los datos están en la tabla del detalle."></canvas></div>`;
}

function tablaHTML(p) {
  const g = GRAFICOS[p.grafico];
  if (esProfesional(p) || p.imagen || !g) return '';
  const [cab, ...filas] = g.tabla();
  return `<details class="data-table"><summary>Ver datos en tabla</summary><div class="data-table__scroll" tabindex="0" role="region" aria-label="Datos del gráfico"><table>
    <thead><tr>${cab.map((c) => `<th scope="col">${c}</th>`).join('')}</tr></thead>
    <tbody>${filas.map(([f, ...r]) => `<tr><th scope="row">${f}</th>${r.map((v) => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div></details>`;
}

const listaHTML = (l) => `<ul>${l.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
const herramientasHTML = (p) => `<ul class="project__tools" aria-label="Herramientas">${p.herramientas.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`;
const ejemploHTML = (p) => `<p class="ejemplo">Ejemplo con datos simulados</p>${visualHTML(p)}`;

// Tarjeta de proyecto (i = posición en la lista de proyectos visibles)
const tarjetaProyecto = (p, i) => `
  <article class="project${esProfesional(p) ? ' project--featured' : ''}" data-reveal data-i="${i}">
    <div class="project__visual${esProfesional(p) ? ' is-ficha' : ''}">${visualHTML(p)}</div>
    <div class="project__body">
      ${estadoHTML(p)}
      <h3>${esc(p.nombre)}</h3>
      <p>${esc(p.descripcion)}</p>
      ${herramientasHTML(p)}
      ${p.metas?.resumen ? `<p class="project__metas"><span>Metas 2027</span>${esc(p.metas.resumen)}</p>` : ''}
      <button class="project__more" type="button" aria-haspopup="dialog" aria-label="Detalles del proyecto: ${esc(p.nombre)}">Detalles del proyecto ${icon('arrow-up-right')}</button>
    </div>
  </article>`;

// Tarjeta de servicio (i = posición en SERVICIOS)
const tarjetaServicio = (s, i) => `
  <article class="project service" data-reveal data-i="${i}">
    <div class="project__visual">${ejemploHTML(s)}</div>
    <div class="project__body">
      ${estadoHTML({ estado: 'servicio' })}
      <h3>${esc(s.nombre)}</h3>
      <p>${esc(s.resumen)}</p>
      ${herramientasHTML(s)}
      ${s.aviso ? `<p class="service__aviso">${esc(s.aviso)}</p>` : ''}
      <button class="project__more" type="button" aria-haspopup="dialog" aria-label="Detalles del servicio: ${esc(s.nombre)}">Detalles del servicio ${icon('arrow-up-right')}</button>
    </div>
  </article>`;

// Carga cada gráfico cuando su tarjeta se acerca a la pantalla
function observarGraficos(contenedor) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      obs.unobserve(en.target);
      pintarGrafico(en.target);
    });
  }, { rootMargin: '500px 0px' });
  $$('canvas', contenedor).forEach((c) => obs.observe(c));
}

function iniciarProyectos() {
  const lista = $('#lista-proyectos');
  const destacados = $('#proyectos-destacados');
  const visibles = PROYECTOS.filter((p) => SITIO.mostrarPendientes || p.estado !== 'pendiente');

  // Los proyectos profesionales van primero y separados de los demostrativos
  const profesionales = visibles.filter(esProfesional);
  const demos = visibles.filter((p) => !esProfesional(p));
  destacados.innerHTML = profesionales.map((p) => tarjetaProyecto(p, visibles.indexOf(p))).join('');
  destacados.hidden = !profesionales.length;
  lista.innerHTML = demos.map((p) => tarjetaProyecto(p, visibles.indexOf(p))).join('');
  lista.hidden = !demos.length;
  $('#rotulo-demos').hidden = !(profesionales.length && demos.length);

  $('#proyectos').addEventListener('click', (e) => {
    const tarjeta = e.target.closest('.project');
    if (tarjeta) abrirDetalle(visibles[+tarjeta.dataset.i], $('.project__more', tarjeta));
  });
  observarGraficos(lista);

  // Servicios
  const servicios = $('#lista-servicios');
  servicios.innerHTML = SERVICIOS.map(tarjetaServicio).join('');
  servicios.addEventListener('click', (e) => {
    const tarjeta = e.target.closest('.service');
    if (tarjeta) abrirServicio(SERVICIOS[+tarjeta.dataset.i], $('.project__more', tarjeta));
  });
  observarGraficos(servicios);

  // Cierre del detalle: botón, clic fuera o Esc (nativo)
  const modal = $('#modal');
  $('.modal__close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    const r = modal.getBoundingClientRect();
    const fuera = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (e.target === modal && fuera) modal.close();
    // "Solicitar este servicio" cierra el detalle y baja a Contacto
    if (e.target.closest('[data-cerrar]')) { modal.origen = null; modal.close(); }
  });
  modal.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    $$('canvas', modal).forEach((c) => window.Chart?.getChart(c)?.destroy());
    modal.origen?.focus({ preventScroll: true });
  });
}

function mostrarDetalle(html, origen) {
  const modal = $('#modal');
  $('#modal-cuerpo').innerHTML = html;
  modal.origen = origen;
  document.body.classList.add('is-locked');
  modal.showModal();
  modal.scrollTop = 0;
  $$('canvas', modal).forEach(pintarGrafico);
}

function abrirDetalle(p, origen) {
  const visual = visualHTML(p);
  const resultados = p.resultados.length
    ? `<h3>${esProfesional(p) ? 'Hallazgos principales' : 'Resultados y aprendizajes'}</h3>${listaHTML(p.resultados)}`
    : esProfesional(p) ? ''
    : `<h3>Resultado esperado</h3><p>${esc(p.resultadoEsperado || 'Por definir.')}</p>${SITIO.mostrarPendientes ? '<p><span class="tag tag--pending">Resultados por completar</span></p>' : ''}`;
  const enlaces = p.enlaces.length
    ? `<div class="modal__links">${p.enlaces.map((l) => `<a class="btn btn--line" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.texto)} ${icon('arrow-up-right')}</a>`).join('')}</div>`
    : SITIO.mostrarPendientes ? '<div class="modal__links"><span class="tag tag--pending">Enlace al repositorio por completar</span></div>' : '';

  mostrarDetalle(`
    ${estadoHTML(p)}
    <h2 id="modal-titulo">${esc(p.nombre)}</h2>
    <p class="modal__lead">${esc(p.descripcion)}</p>
    ${visual ? `<div class="modal__visual${esProfesional(p) ? ' is-ficha' : ''}">${visual}</div>${tablaHTML(p)}` : ''}
    <div class="modal__facts">
      <div><h3>Objetivo</h3><p>${esc(p.objetivo)}</p></div>
      <div><h3>Herramientas</h3><p>${p.herramientas.map(esc).join(', ')}</p></div>
      <div><h3>${esProfesional(p) ? 'Funciones' : 'Metodología'}</h3>${listaHTML(p.metodologia)}</div>
      ${p.informe ? `<div><h3>${esc(p.informe.titulo)}</h3>${listaHTML(p.informe.pasos)}</div>` : ''}
      ${resultados ? `<div class="${esProfesional(p) ? 'modal__facts-wide' : ''}">${resultados}</div>` : ''}
      ${p.metas?.items.length ? `<div class="modal__facts-wide"><h3>${esc(p.metas.titulo)}</h3>
        <ol class="metas">${p.metas.items.map(([plazo, meta]) => `<li><span class="metas__plazo">${esc(plazo)}</span><span>${esc(meta)}</span></li>`).join('')}</ol></div>` : ''}
    </div>
    ${enlaces}`, origen);
}

function abrirServicio(s, origen) {
  mostrarDetalle(`
    ${estadoHTML({ estado: 'servicio' })}
    <h2 id="modal-titulo">${esc(s.nombre)}</h2>
    <p class="modal__lead">${esc(s.resumen)}</p>
    ${s.aviso ? `<p class="service__aviso service__aviso--modal">${esc(s.aviso)}</p>` : ''}
    <div class="modal__visual">${ejemploHTML(s)}</div>${tablaHTML(s)}
    <div class="modal__facts">
      <div><h3>Para qué sirve</h3><p>${esc(s.paraQue)}</p></div>
      <div><h3>Herramientas</h3><p>${s.herramientas.map(esc).join(', ')}</p></div>
      <div><h3>Cómo trabajo</h3>${listaHTML(s.proceso)}</div>
      <div><h3>Qué recibes</h3>${listaHTML(s.entregables)}</div>
      ${s.referencia ? `<div class="modal__facts-wide"><p class="service__ref">${esc(s.referencia)}</p></div>` : ''}
    </div>
    <div class="modal__links"><a class="btn btn--primary" href="#contacto" data-cerrar>Solicitar este servicio ${icon('arrow-down')}</a></div>`, origen);
}

/* B7. TRAYECTORIA -------------------------------------------------------------------- */
function iniciarTrayectoria() {
  const lista = $('#linea-tiempo');
  const filtros = $('#filtros');
  const entradas = TRAYECTORIA.filter((e) => SITIO.mostrarPendientes || !e.pendiente);

  if (!entradas.length) { // Sin entradas reales y con lo pendiente oculto, no se muestra la sección
    $('#trayectoria').hidden = true;
    $('.nav a[href="#trayectoria"]').closest('li').hidden = true;
    return;
  }

  const itemHTML = (i) => {
    const ver = i.enlace ? `<a href="${esc(i.enlace)}" target="_blank" rel="noopener noreferrer" aria-label="Verificar certificado: ${esc(i.texto)}">Verificar certificado</a>` : '';
    return `<li><strong>${esc(i.texto)}</strong>${i.detalle ? `<span>${esc(i.detalle)}</span>` : ''}${ver}</li>`;
  };

  const pintar = (tipo) => {
    lista.innerHTML = entradas.filter((e) => !tipo || e.tipo === tipo).map((e) => `
      <li class="entry${e.pendiente ? ' entry--pending' : ''}">
        <p class="entry__meta">${e.fecha ? `<b>${esc(e.fecha)}</b>` : ''}<span>${esc(TIPOS[e.tipo])}</span>${e.pendiente ? '<span class="tag tag--pending">Por completar</span>' : ''}</p>
        <h3>${esc(e.titulo)}</h3>
        ${e.entidad ? `<p class="entry__org">${esc(e.entidad)}</p>` : ''}
        ${e.descripcion ? `<p class="entry__text">${esc(e.descripcion)}</p>` : ''}
        ${e.puntos?.length ? `<ul class="entry__points">${e.puntos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        ${e.imagen ? `<figure class="entry__photo"><img src="${esc(e.imagen.src)}" alt="${esc(e.imagen.alt)}" width="${e.imagen.ancho}" height="${e.imagen.alto}" loading="lazy"><figcaption>${esc(e.imagen.pie)}</figcaption></figure>` : ''}
        ${e.items?.length ? `<ul class="entry__items">${e.items.map(itemHTML).join('')}</ul>` : ''}
        ${e.enlace ? `<p class="entry__text"><a href="${esc(e.enlace)}" target="_blank" rel="noopener noreferrer">Ver soporte</a></p>` : ''}
      </li>`).join('');
  };

  const presentes = Object.keys(TIPOS).filter((t) => entradas.some((e) => e.tipo === t));
  filtros.innerHTML = [['', 'Todo'], ...presentes.map((t) => [t, TIPOS[t]])]
    .map(([t, n], i) => `<button type="button" data-tipo="${t}" aria-pressed="${i === 0}">${n}</button>`).join('');
  filtros.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    $$('button', filtros).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    pintar(b.dataset.tipo);
  });
  pintar('');
}

/* B8. HABILIDADES, ANIMACIONES E INICIO -------------------------------------------------- */
function iniciarHabilidades() {
  const grid = $('.skills__grid');
  const estado = $('#skills-estado');
  const botones = $$('[data-skill]', grid);
  const nombre = (b) => b.textContent.trim();
  const unir = (l) => (l.length > 1 ? `${l.slice(0, -1).join(', ')} y ${l.at(-1)}` : l[0]);

  // Las relaciones valen en ambos sentidos
  const relaciones = new Map(botones.map((b) => [b.dataset.skill, new Set()]));
  botones.forEach((b) => b.dataset.rel.split(' ').filter(Boolean).forEach((r) => {
    relaciones.get(b.dataset.skill).add(r);
    relaciones.get(r)?.add(b.dataset.skill);
  }));

  botones.forEach((b) => b.setAttribute('aria-pressed', 'false'));
  grid.addEventListener('click', (e) => {
    const b = e.target.closest('[data-skill]');
    if (!b) return;
    const activar = b.getAttribute('aria-pressed') !== 'true';
    const rel = relaciones.get(b.dataset.skill);
    grid.classList.toggle('has-selection', activar);
    botones.forEach((x) => {
      x.setAttribute('aria-pressed', String(activar && x === b));
      x.classList.toggle('is-related', activar && rel.has(x.dataset.skill));
    });
    estado.innerHTML = activar
      ? `<b>${esc(nombre(b))}</b> se relaciona con ${esc(unir(botones.filter((x) => rel.has(x.dataset.skill)).map(nombre)))}.`
      : '';
  });
}

function iniciarAnimaciones() {
  if (sinMovimiento.matches || !('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      obs.unobserve(en.target);
      en.target.classList.add('is-revealed');
      en.target.classList.remove('to-reveal');
      // Al terminar, cada elemento recupera sus propias transiciones
      setTimeout(() => en.target.classList.remove('is-revealed'), 900);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  $$('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('to-reveal');
    obs.observe(el);
  });
}

aplicarDatos();
iniciarProyectos();
iniciarTrayectoria();
iniciarNavegacion();
iniciarSimulador();
iniciarHabilidades();
iniciarAnimaciones();
