const db = require('./db');

const Cinemas = {
  findAll: async () => {
    const query = 'SELECT * FROM movie_theaters';
    return db.query(query);
  },

  findById: async (id) => {
    const query = 'SELECT * FROM movie_theaters WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
};

module.exports = Cinemas;