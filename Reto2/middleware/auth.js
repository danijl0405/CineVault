/**
 * Middleware de autenticación para proteger rutas
 */

/**
 * Middleware para requerir autenticación
 * Redirige a la página de login si el usuario no está autenticado
 */
function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
        // El usuario está autenticado, continuamos a la ruta
        res.locals.user = req.session.user;
        next();
    } else {
        // El usuario no está autenticado, redirigimos al login
        res.redirect('/login');
    }
}

/**
 * Middleware para redirigir usuarios ya autenticados fuera de páginas de login/registro
 */
function redirectIfAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        // El usuario ya está autenticado, redirigimos a sus películas
        res.redirect('/peliculas');
    } else {
        // El usuario no está autenticado, continuamos al login
        next();
    }
}

module.exports = {
    requireAuth,
    redirectIfAuthenticated
};
