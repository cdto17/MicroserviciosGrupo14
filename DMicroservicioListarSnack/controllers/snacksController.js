const Snacks = require('../models/snacksModel');

const listSnacks = async (req, res) => {
  try {
    const result = await Snacks.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSnackById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Snacks.findById(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Snack not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listSnacks,
  getSnackById,
};