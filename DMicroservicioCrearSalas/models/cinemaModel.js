const db = require('./db');

const Cinema = {
  create: async (data) => {
    const { name, capacity, location } = data;
    const query = `
      INSERT INTO movie_theaters (name, capacity, location) 
      VALUES ($1, $2, $3) RETURNING *`;
    const values = [name, capacity, location];
    return db.query(query, values);
  }
};

module.exports = Cinema;
