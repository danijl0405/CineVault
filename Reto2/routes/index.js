var express = require('express');
var router = express.Router();
var {
  recentMovies,
  featureHighlights,
  contactChannels,
  metrics,
  faqs,
} = require('../data/site-content');

router.get('/', function (req, res) {
  res.render('pages/home', {
    pageTitle: 'Filmoteca colaborativa',
    intro: {
      eyebrow: 'Cineclubes y colecciones privadas',
      headline: 'Gestiona tus películas sin hojas de cálculo eternas.',
      copy:
        'Filmoteca nació en un cineclub de barrio y hoy ayuda a videotecas personales, festivales y asociaciones a llevar inventarios, préstamos y descubrimientos al día.',
      ctaPrimary: { href: '/login', label: 'Ir al login' },
      ctaSecondary: { href: '/contacto', label: 'Solicitar información' },
    },
    featureHighlights,
    recentMovies,
    metrics,
  });
});

router.get('/login', function (req, res) {
  res.render('pages/login', {
    pageTitle: 'Iniciar sesión',
    helperText:
      'Introduce tus credenciales para revisar movimientos, registrar nuevos préstamos y actualizar fichas sin perder el contexto del club.',
    faqs,
  });
});

router.get('/contacto', function (req, res) {
  res.render('pages/contact', {
    pageTitle: 'Contacto',
    helperText:
      'Escríbenos si quieres migrar tu base de datos, sumar a tu equipo o contarnos cómo usan Filmoteca en tu comunidad.',
    contactChannels,
    faqs,
  });
});

module.exports = router;
