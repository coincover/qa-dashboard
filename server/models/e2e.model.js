const db = require('../database/connection');

module.exports = {
  getLastResult: async (tableName) => await db(tableName).select().orderBy('id', 'desc').first(),
  getTable: async (tableName) => await db(tableName).select(),
  insertData: async (tableName, dataToInsert) => await db(tableName).insert(dataToInsert),
  deleteData: async (tableName, id) => await db(tableName).where({ id }).del()
};
