const Snacks = require('../models/snacksModel');


const deleteSnacks = async (req, res) => {
  try {
    const result = await Snacks.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Snack not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    deleteSnacks
};
