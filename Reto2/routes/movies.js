var express = require('express');
var router = express.Router();
var { requireAuth } = require('../middleware/auth');
var { getUserCopies, getMovieWithUserCopies } = require('../data/dataProvider');

/**
 * GET /peliculas
 * Muestra el listado de copias de películas del usuario
 * Ruta protegida - requiere autenticación
 */
router.get('/peliculas', requireAuth, function (req, res) {
    const username = req.session.user.username;
    const userMovies = getUserCopies(username);

    res.render('pages/movies-list', {
        pageTitle: 'Mis Películas',
        movies: userMovies,
        username: username
    });
});

/**
 * GET /pelicula/:id
 * Muestra información detallada sobre una película específica
 * Ruta protegida - requiere autenticación
 */
router.get('/pelicula/:id', requireAuth, function (req, res) {
    const movieId = req.params.id;
    const username = req.session.user.username;

    const movieData = getMovieWithUserCopies(username, movieId);

    if (!movieData) {
        // Película no encontrada, redirigir al listado de películas
        return res.redirect('/peliculas');
    }

    res.render('pages/movie-detail', {
        pageTitle: movieData.title,
        movie: movieData
    });
});

module.exports = router;
