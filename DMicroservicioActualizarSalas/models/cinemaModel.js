const db = require('./db');

const Cinema = {
  
  update: async (id, data) => {
    const { name, capacity, location } = data;
    const query = `
      UPDATE movie_theaters 
      SET name = $1, capacity = $2, location = $3
      WHERE id = $4 RETURNING *`;
    const values = [name, capacity, location, id];
    return db.query(query, values);
  }
};

module.exports = Cinema;
