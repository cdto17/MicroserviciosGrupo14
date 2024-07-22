const Snacks = require('../models/snacksModel');

const updateSnacks = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSnack = req.body;
    const result = await Snacks.update(id, updatedSnack);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Snack not found' });
    }
    res.json({ message: 'Snack updated successfully', snack: updatedSnack });
  } catch (err) {
    console.error('Error updating snack:', err);
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  updateSnacks
};
