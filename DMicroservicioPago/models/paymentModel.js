const db = require('./db');

const Payment = {
  findAll: async () => {
    const query = 'SELECT * FROM payment_methods';
    return db.query(query);
  }
};

module.exports = Payment;
