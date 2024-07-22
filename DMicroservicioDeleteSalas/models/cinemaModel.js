const db = require('./db');

const Cinema = {
  delete: async (id) => {
    const query = 'DELETE FROM movie_theaters WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Cinema;
