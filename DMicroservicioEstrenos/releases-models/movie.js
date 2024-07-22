const pool = require('../database/db');

const getMovies = async () => {
  const result = await pool.query('SELECT * FROM movies');
  return result.rows;
};

const getMovieById = async (id) => {
  const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
  return result.rows[0];
};

const createMovie = async (movie) => {
  const { title, description, genre, releaseDate, duration } = movie;
  const result = await pool.query(
    'INSERT INTO movies (title, description, genre, release_date, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, genre, releaseDate, duration]
  );
  return result.rows[0];
};

const updateMovie = async (id, movie) => {
  const { title, description, genre, releaseDate, duration } = movie;
  const result = await pool.query(
    'UPDATE movies SET title = $1, description = $2, genre = $3, release_date = $4, duration = $5 WHERE id = $6 RETURNING *',
    [title, description, genre, releaseDate, duration, id]
  );
  return result.rows[0];
};

const deleteMovie = async (id) => {
  await pool.query('DELETE FROM movies WHERE id = $1', [id]);
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
