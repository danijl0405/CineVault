var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { navLinks } = require('./data/site-content');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.navLinks = navLinks;
  res.locals.currentPath = req.path;
  next();
});

app.use('/', indexRouter);

// catch 404
app.use(function (req, res) {
  res.status(404).render('pages/not-found', {
    pageTitle: 'Página no encontrada',
    description:
      'No encontramos la vista que buscas. Vuelve al inicio para seguir explorando tu videoteca colaborativa.',
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
