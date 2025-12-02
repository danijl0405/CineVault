var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var { navLinks } = require('./data/site-content');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuración de la sesión
app.use(session({
  secret: 'cinevault-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 24 horas
  }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.navLinks = navLinks;
  res.locals.currentPath = req.path;
  res.locals.user = req.session.user || null;
  next();
});

app.use('/', indexRouter);
app.use('/', moviesRouter);

// Manejo de error 404 (Página no encontrada)
app.use(function (req, res) {
  res.status(404).render('pages/not-found', {
    pageTitle: 'Página no encontrada',
    description:
      'No encontramos la vista que buscas. Vuelve al inicio para seguir explorando tu videoteca colaborativa.',
  });
});

// Manejador de errores
app.use(function (err, req, res, next) {
  // Establecer variables locales, solo proporcionando error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
