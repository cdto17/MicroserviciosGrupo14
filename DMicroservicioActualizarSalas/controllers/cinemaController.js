const Cinema = require('../models/cinemaModel');

const updateCinema = async (req, res) => {
  try {
    const result = await Cinema.update(req.params.id, req.body);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cinema not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  updateCinema
};
