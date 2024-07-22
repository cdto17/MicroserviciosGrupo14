const Theater = require('../models/theaterModel');

const listTheater = async (req, res) => {
  try {
    const result = await Theater.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listTheater,
};
