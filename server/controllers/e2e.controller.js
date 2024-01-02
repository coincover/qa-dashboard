/* eslint-disable import/order */
const { getTableName } = require('../utils/getTableName');
const { getLastResult } = require('../models/e2e.model');
const products = require('../utils/constant').products;

const getTotalTests = async (req, res) => {
  try {
    let totalTests = 0;

    for (const product of products) {
      const tableName = getTableName('e2e', product);

      if (!tableName) {
        return res.status(400).json({ error: 'Invalid type or product' });
      }

      const latestTestResult = await getLastResult(tableName);

      if (latestTestResult) {
        totalTests += latestTestResult.pass + latestTestResult.fail + latestTestResult.skip;
      }
    }

    res.json({ totalTests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStatus = async (req, res) => {
  try {
    const results = {};

    for (const product of products) {
      const tableName = getTableName('e2e', product);

      if (!tableName) {
        return res.status(400).json({ error: 'Invalid type or product' });
      }

      const lastResult = await getLastResult(tableName);

      if (!lastResult) {
        results[product] = { status: 'unknown', result: 'No results available' };
      } else {
        const overallStatus = lastResult.fail > 0 ? 'fail' : 'pass';
        const totalTests = lastResult.pass + lastResult.fail + lastResult.skip;

        const passPercentage = (((lastResult.pass + lastResult.skip) / totalTests) * 100).toFixed(0);
        const overallResult = `${passPercentage}% test pass`;

        results[product] = { status: overallStatus, result: overallResult };
      }
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getTotalTests,
  getStatus
};
