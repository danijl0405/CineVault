var express = require('express');
var router = express.Router();
var {
  recentMovies,
  featureHighlights,
  contactChannels,
  metrics,
  faqs,
} = require('../data/site-content');
var { getUserByCredentials } = require('../data/dataProvider');
var { redirectIfAuthenticated } = require('../middleware/auth');

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

router.get('/login', redirectIfAuthenticated, function (req, res) {
  res.render('pages/login', {
    pageTitle: 'Iniciar sesión',
    helperText:
      'Introduce tus credenciales para revisar movimientos, registrar nuevos préstamos y actualizar fichas sin perder el contexto del club.',
    faqs,
    error: null,
  });
});

router.post('/login', function (req, res) {
  const { username, password } = req.body;

  // Validamos las credenciales
  const user = getUserByCredentials(username, password);

  if (user) {
    // Guardamos el usuario en la sesión
    req.session.user = user;
    // Redirigimos a la página de películas
    res.redirect('/peliculas');
  } else {
    // Credenciales inválidas, mostramos error
    res.render('pages/login', {
      pageTitle: 'Iniciar sesión',
      helperText:
        'Introduce tus credenciales para revisar movimientos, registrar nuevos préstamos y actualizar fichas sin perder el contexto del club.',
      faqs,
      error: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.',
    });
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.error('Error al destruir la sesión:', err);
    }
    res.redirect('/');
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
