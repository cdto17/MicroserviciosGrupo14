const db = require('./db');

const Snacks = {
  create: async (data) => {
    const { name, description, price, mark, advert, advert2 } = data;
    const query = `
      INSERT INTO snacks (name, description, price, mark, advert, advert2) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [name, description, price, mark, advert, advert2];
    return db.query(query, values);
  }
};

module.exports = Snacks;
