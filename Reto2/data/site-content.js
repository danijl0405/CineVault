const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Login' },
  { href: '/contacto', label: 'Contacto' },
];

const recentMovies = [
  {
    title: 'Intellestelar',
    owner: 'Christopher N.',
    format: 'Digital',
    addedAt: '10/11/2025',
    poster: '/images/intellestelar.jpg',
    status: 'Disponible',
  },
  {
    title: 'Gladiator',
    owner: 'Ridley S.',
    format: 'Blu-ray',
    addedAt: '08/10/2025',
    poster: '/images/gladiator.jpg',
    status: 'Reservada',
  },
  {
    title: 'El Padrino',
    owner: 'Francis F.',
    format: '4K Ultra HD',
    addedAt: '05/10/2025',
    poster: '/images/padrino.jpg',
    status: 'Prestada',
  },
  {
    title: 'Parasite',
    owner: 'Bong Joon-ho',
    format: 'Blu-ray',
    addedAt: '11/02/2023',
    poster: '/images/parasite.jpg',
    status: 'Disponible',
  },
  {
    title: 'Matrix',
    owner: 'Lana & Lilly W.',
    format: '4K Ultra HD',
    addedAt: '10/01/2024',
    poster: '/images/matrix.jpg',
    status: 'Excelente',
  },
  {
    title: 'Inception',
    owner: 'Christopher N.',
    format: 'Blu-ray',
    addedAt: '14/02/2024',
    poster: '/images/inception.jpg',
    status: 'Disponible',
  },
  {
    title: 'El laberinto del fauno',
    owner: 'Guillermo D.',
    format: 'DVD',
    addedAt: '22/11/2025',
    poster: '/images/laberinto.jpg',
    status: 'Disponible',
  },
  {
    title: 'Fast and Furious 1',
    owner: 'Rob Cohen',
    format: 'DVD',
    addedAt: '22/11/2025',
    poster: '/images/fast1.jpg',
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


