const db = require('./db');

(async () => {
  try {
    await db.schema.dropTableIfExists('identity_service');
    await db.schema.createTable('identity_service', (table) => {
      table.increments('id').primary();
      table.date('test_date'); // Renamed from 'Date'
      table.integer('Pass');
      table.integer('Fail');
      table.integer('Skip');
    });
    console.log('Created identity_service table!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
