const Cinema = require('../models/cinemaModel');


const deleteCinema = async (req, res) => {
  try {
    const result = await Cinema.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cinema not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    deleteCinema
};
