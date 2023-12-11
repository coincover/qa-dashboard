const db = require('./connection');

(async () => {
  try {
    // Drop existing tables
    await db.schema.dropTableIfExists('e2e_disaster_recovery');
    await db.schema.dropTableIfExists('unit_disaster_recovery');
    await db.schema.dropTableIfExists('e2e_identity_service');
    await db.schema.dropTableIfExists('unit_identity_service');
    await db.schema.dropTableIfExists('e2e_ledger_support_tool');
    await db.schema.dropTableIfExists('unit_ledger_support_tool');
    await db.schema.dropTableIfExists('e2e_recovery_as_a_service');
    await db.schema.dropTableIfExists('unit_recovery_as_a_service');
    await db.schema.dropTableIfExists('e2e_transaction_protection');
    await db.schema.dropTableIfExists('unit_transaction_protection');
    await db.schema.dropTableIfExists('e2e_status');

    // Create e2e_disaster_recovery table
    await db.schema.createTable('e2e_disaster_recovery', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('pass');
      table.integer('fail');
      table.integer('skip');
    });

    // Create unit_disaster_recovery table
    await db.schema.createTable('unit_disaster_recovery', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('percentage');
      table.string('commit');
      table.string('pull_request');
      table.string('statement_coverage');
      table.string('function_coverage');
      table.string('branch_coverage');
      table.string('author');
    });

    // Create e2e_identity_service table
    await db.schema.createTable('e2e_identity_service', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('pass');
      table.integer('fail');
      table.integer('skip');
    });

    // Create unit_identity_service table
    await db.schema.createTable('unit_identity_service', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('percentage');
      table.string('commit');
      table.string('pull_request');
      table.string('statement_coverage');
      table.string('function_coverage');
      table.string('branch_coverage');
      table.string('author');
    });

    // Create e2e_ledger_support_tool table
    await db.schema.createTable('e2e_ledger_support_tool', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('pass');
      table.integer('fail');
      table.integer('skip');
    });

    // Create unit_ledger_support_tool table
    await db.schema.createTable('unit_ledger_support_tool', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('percentage');
      table.string('commit');
      table.string('pull_request');
      table.string('statement_coverage');
      table.string('function_coverage');
      table.string('branch_coverage');
      table.string('author');
    });

    // Create e2e_recovery_as_a_service table
    await db.schema.createTable('e2e_recovery_as_a_service', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('pass');
      table.integer('fail');
      table.integer('skip');
    });

    // Create unit_recovery_as_a_service table
    await db.schema.createTable('unit_recovery_as_a_service', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('percentage');
      table.string('commit');
      table.string('pull_request');
      table.string('statement_coverage');
      table.string('function_coverage');
      table.string('branch_coverage');
      table.string('author');
    });

    // Create e2e_transaction_protection table
    await db.schema.createTable('e2e_transaction_protection', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('pass');
      table.integer('fail');
      table.integer('skip');
    });

    // Create unit_transaction_protection table
    await db.schema.createTable('unit_transaction_protection', (table) => {
      table.increments('id').primary();
      table.date('date');
      table.integer('percentage');
      table.string('commit');
      table.string('pull_request');
      table.string('statement_coverage');
      table.string('function_coverage');
      table.string('branch_coverage');
      table.string('author');
    });

    // Create e2e_status table
    await db.schema.createTable('e2e_status', (table) => {
      table.increments('id').primary();
      table.string('product'); // The name of the product
      table.string('status'); // Status for the product (pass/fail/unknown)
      table.string('result'); // Result description
    });

    console.log('Created tables for all test types and products!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
