const db = require('./db');

const Snacks = {
  findAll: async () => {
    const query = 'SELECT * FROM snacks';
    return db.query(query);
  },
  
  findById: async (id) => {
    const query = 'SELECT * FROM snacks WHERE id = $1';
    const result = await db.query(query, [id]);
    return result; // Devuelve el resultado completo
  }
};

module.exports = Snacks;