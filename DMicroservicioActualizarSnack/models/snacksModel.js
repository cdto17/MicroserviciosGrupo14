const db = require('./db');

const Snacks = {
  
  update: async (id, data) => {
    const { name, description, price, mark, advert, advert2 } = data;
    const query = `
      UPDATE snacks 
      SET name = $1, description = $2, price = $3, mark = $4, advert = $5, advert2 = $6 
      WHERE id = $7 RETURNING *`;
    const values = [name, description, price, mark, advert, advert2, id];
    return db.query(query, values);
  }
};

module.exports = Snacks;
