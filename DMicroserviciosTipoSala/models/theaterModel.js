const db = require('./db');

const Theater = {
  findAll: async () => {
    const query = 'SELECT * FROM rooms';
    return db.query(query);
  }
};

module.exports = Theater;
