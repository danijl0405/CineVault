const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Login' },
  { href: '/contacto', label: 'Contacto' },
];

const recentMovies = [
  {
    title: 'Horizontes Paralelos',
    owner: 'Camila P.',
    format: 'Blu-ray 4K',
    addedAt: 'Hace 2 días',
    status: 'Disponible',
  },
  {
    title: 'Cartas al Futuro',
    owner: 'Luis M.',
    format: 'Digital',
    addedAt: 'Hace 4 días',
    status: 'Reservada',
  },
  {
    title: 'Sueños de Medianoche',
    owner: 'Óscar R.',
    format: 'DVD',
    addedAt: 'Hace 6 días',
    status: 'Prestada',
  },
  {
    title: 'Armonía Interestelar',
    owner: 'María N.',
    format: 'Blu-ray',
    addedAt: 'Hace 1 semana',
    status: 'Disponible',
  },
];

const featureHighlights = [
  {
    title: 'Perfiles para cada club',
    description:
      'Crea espacios privados para familias, colectivos o festivales y decide quién puede ver, editar o prestar cada copia.',
    icon: '👥',
  },
  {
    title: 'Historial de préstamos',
    description:
      'Controla qué película salió, quién la tiene y cuándo vuelve. Recibe recordatorios suaves antes de la fecha de devolución.',
    icon: '🎞️',
  },
  {
    title: 'Búsqueda por etiquetas',
    description:
      'Filtra por género, formato, procedencia o estado de conservación sin salir de la misma pantalla.',
    icon: '🏷️',
  },
];

const metrics = [
  { label: 'Copias registradas', value: '12.482', detail: 'Actualizado al minuto' },
  { label: 'Clubs activos', value: '86', detail: 'Cineclubes y videotecas' },
  { label: 'Préstamos este mes', value: '413', detail: '+18% vs. anterior' },
];

const contactChannels = [
  {
    label: 'Atención general',
    value: 'hola@filmoteca.app',
    hint: 'Respuesta en menos de 1 día',
  },
  {
    label: 'Coordinación de clubes',
    value: 'clubes@filmoteca.app',
    hint: 'Migraciones y formaciones',
  },
  {
    label: 'Teléfono',
    value: '+34 600 123 456',
    hint: 'L-V | 09:00-18:00',
  },
];

const faqs = [
  {
    question: '¿Necesito instalar algo?',
    answer:
      'No. Filmoteca funciona en el navegador y se adapta a móvil, tableta y escritorio. Solo necesitas conexión a internet.',
  },
  {
    question: '¿Puedo importar mi Excel o Letterboxd?',
    answer:
      'Sí. Aceptamos CSV, XLSX y plantillas JSON. Te guiamos paso a paso para mapear campos como director, año o ubicación.',
  },
  {
    question: '¿Cómo se respaldan los datos?',
    answer:
      'Realizamos copias diarias y mantenemos un histórico de cambios para deshacer movimientos si lo necesitas.',
  },
];

module.exports = {
  navLinks,
  recentMovies,
  featureHighlights,
  contactChannels,
  metrics,
  faqs,
};


