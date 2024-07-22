const pool = require('../database/db');

const getMovies = async () => {
  const result = await pool.query('SELECT * FROM movies');
  return result.rows;
};

const createMovie = async (movie) => {
  const { title, description, genre, releaseDate, duration } = movie;
  const result = await pool.query(
    'INSERT INTO movies (title, description, genre, release_date, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, genre, releaseDate, duration]
  );
  return result.rows[0];
};

const processAndCreateMovie = async (movieData) => {
  if (movieData.release_date) {
    movieData.release_date = new Date(movieData.release_date);
    if (isNaN(movieData.release_date.getTime())) {
      throw new Error('Invalid release_date format');
    }
  }

  const newMovieData = {
    title: movieData.title,
    description: movieData.description,
    genre: movieData.genre,
    releaseDate: movieData.release_date,
    duration: movieData.duration
  };

  return await createMovie(newMovieData);
};

module.exports = {
  getMovies,
  createMovie,
  processAndCreateMovie
};
