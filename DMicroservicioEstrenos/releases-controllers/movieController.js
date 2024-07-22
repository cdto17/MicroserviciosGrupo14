const Movie = require('../releases-models/movie');
const producer = require('../kafka/producer');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.getMovieById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.createMovie(req.body);

    // Asegurarse de que la fecha se envíe correctamente
    console.log('Sending movie to Kafka:', movie);
    producer.send(movie);

    res.status(201).json(movie);
  } catch (error) {
    console.error('Error in createMovie:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.updateMovie(req.params.id, req.body);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.deleteMovie(req.params.id);
    res.status(200).json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
