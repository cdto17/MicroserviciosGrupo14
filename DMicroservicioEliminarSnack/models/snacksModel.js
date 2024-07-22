const db = require('./db');

const Snacks = {
  delete: async (id) => {
    const query = 'DELETE FROM snacks WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Snacks;
