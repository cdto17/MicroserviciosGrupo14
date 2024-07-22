const Cinema = require('../models/cinemaModel');

const createCinema = async (req, res) => {
  try {
    const result = await Cinema.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCinema
};
