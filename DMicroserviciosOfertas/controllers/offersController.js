const Offer = require('../models/offersModel');

const listOffers = async (req, res) => {
  try {
    const result = await Offer.findAll();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listOffers,
};
