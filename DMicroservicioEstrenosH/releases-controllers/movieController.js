const Movie = require('../releases-models/movie');

exports.getMovies = async (req, res) => {
  try {
    const result = await Movie.getMovies();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
