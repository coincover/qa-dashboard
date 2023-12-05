const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.REACT_APP_DB_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;
