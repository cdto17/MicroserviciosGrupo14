const Snacks = require('../models/snacksModel');

const createSnacks = async (req, res) => {
  try {
    const result = await Snacks.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSnacks
};
