const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString:
      'postgres://qa_dashboard_3bip_user:Ts2i1WTgYbUXep8k51DE2jn8zSbkeScr@dpg-clmrc6r8772c73e09j50-a.oregon-postgres.render.com/qa_dashboard_3bip',
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = db;
