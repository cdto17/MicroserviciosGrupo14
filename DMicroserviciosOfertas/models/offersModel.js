const db = require('./db');

const Offer = {
  findAll: async () => {
    const query = 'SELECT * FROM offers_table';
    return db.query(query);
  }
};

module.exports = Offer;
