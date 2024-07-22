const Cinemas = require('../models/cinemasModel');

const listCinemas = async (req, res) => {
  try {
    const result = await Cinemas.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCinemaById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cinemas.findById(id);
    if (!result) {
      return res.status(404).json({ message: 'Cinema not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listCinemas,
  getCinemaById,
};
