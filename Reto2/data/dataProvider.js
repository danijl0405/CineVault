const fs = require('fs');
const path = require('path');

// Carga de archivos JSON de datos
const moviesPath = path.join(__dirname, 'movies.json');
const usersPath = path.join(__dirname, 'users.json');

let moviesData = [];
let usersData = [];

// Cargamos el catálogo de películas
try {
  const moviesRaw = fs.readFileSync(moviesPath, 'utf-8');
  moviesData = JSON.parse(moviesRaw);
} catch (error) {
  console.error('Error cargando movies.json:', error);
}

// Cargamos los datos de usuarios
try {
  const usersRaw = fs.readFileSync(usersPath, 'utf-8');
  usersData = JSON.parse(usersRaw);
} catch (error) {
  console.error('Error cargando users.json:', error);
}

/**
 * Obtiene todas las películas del catálogo
 * @returns {Array} Array con todas las películas
 */
function getAllMovies() {
  return moviesData;
}

/**
 * Busca una película específica por su ID
 * @param {number} id - ID de la película
 * @returns {Object|null} Objeto película o null si no existe
 */
function getMovieById(id) {
  return moviesData.find(movie => movie.id === parseInt(id)) || null;
}

/**
 * Valida un usuario por sus credenciales
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {Object|null} Objeto usuario (sin password) o null si no coincide
 */
function getUserByCredentials(username, password) {
  const user = usersData.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    // Devolvemos el usuario sin la contraseña por seguridad
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}

/**
 * Obtiene todas las copias de películas de un usuario
 * @param {string} username - Nombre de usuario
 * @returns {Array} Array de objetos película con información de la copia
 */
function getUserCopies(username) {
  const user = usersData.find(u => u.username === username);

  if (!user || !user.copies) {
    return [];
  }

  // Mapeamos las copias del usuario con los datos completos de la película
  return user.copies.map(copy => {
    const movie = getMovieById(copy.id_movie);
    if (movie) {
      return {
        ...movie,
        copyStatus: copy.status,
        copyFormat: copy.format
      };
    }
    return null;
  }).filter(movie => movie !== null);
}

/**
 * Obtiene todas las copias de una película específica que tiene un usuario
 * @param {string} username - Nombre de usuario
 * @param {number} movieId - ID de la película
 * @returns {Array} Array de copias de esa película
 */
function getMovieCopiesForUser(username, movieId) {
  const user = usersData.find(u => u.username === username);

  if (!user || !user.copies) {
    return [];
  }

  return user.copies.filter(copy => copy.id_movie === parseInt(movieId));
}

/**
 * Obtiene una película con las copias que tiene el usuario
 * @param {string} username - Nombre de usuario
 * @param {number} movieId - ID de la película
 * @returns {Object|null} Objeto película con las copias del usuario o null
 */
function getMovieWithUserCopies(username, movieId) {
  const movie = getMovieById(movieId);

  if (!movie) {
    return null;
  }

  const userCopies = getMovieCopiesForUser(username, movieId);

  return {
    ...movie,
    userCopies
  };
}

module.exports = {
  getAllMovies,
  getMovieById,
  getUserByCredentials,
  getUserCopies,
  getMovieCopiesForUser,
  getMovieWithUserCopies
};
