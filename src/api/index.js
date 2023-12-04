require('dotenv').config();
const db = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const getTableName = (type, product) => {
  if (type === 'e2e' || type === 'unit') {
    return `${type}_${product}`;
  }
  return null;
};

const validatePostData = (req, res, next) => {
  const { type } = req.params;
  const { date, pass, fail, skip, percentage } = req.body;

  if (!date || !pass || !fail || !skip) {
    return res.status(400).json({ error: 'For e2e, all fields are required (date, pass, fail, skip)' });
  }

  if (type === 'unit' && !percentage) {
    return res.status(400).json({ error: 'For unit, the field percentage is required' });
  }

  if (
    typeof date !== 'string' ||
    typeof pass !== 'string' ||
    typeof fail !== 'string' ||
    typeof skip !== 'string' ||
    (type === 'unit' && typeof percentage !== 'string')
  ) {
    return res.status(400).json({ error: 'All fields must be of type string' });
  }

  next();
};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/e2e/status', async (req, res) => {
  try {
    const products = ['disaster_recovery', 'identity_service', 'ledger_support_tool', 'recovery_as_a_service', 'transaction_protection'];
    const results = {};

    // Loop through each product
    for (const product of products) {
      const tableName = getTableName('e2e', product);

      if (!tableName) {
        return res.status(400).json({ error: 'Invalid type or product' });
      }

      // Get the last dated result for the product
      const lastResult = await db(tableName).select().orderBy('test_date', 'desc').first();

      // Check if there's data for the product
      if (!lastResult) {
        results[product] = { status: 'unknown', result: 'No results available' };
      } else {
        // Calculate the overall status based on pass and fail
        const overallStatus = lastResult.Fail > 0 ? 'fail' : 'pass';
        const totalTests = lastResult.Pass + lastResult.Fail + lastResult.Skip;
        const passPercentage = ((lastResult.Pass / totalTests) * 100).toFixed(0);

        const overallResult = `${passPercentage}% test pass`;

        results[product] = { status: overallStatus, result: overallResult };
      }
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/e2e/totalTests', async (req, res) => {
  try {
    const products = ['disaster_recovery', 'identity_service', 'ledger_support_tool', 'recovery_as_a_service', 'transaction_protection'];
    let totalTests = 0;

    // Loop through each product
    for (const product of products) {
      const tableName = getTableName('e2e', product);

      if (!tableName) {
        return res.status(400).json({ error: 'Invalid type or product' });
      }

      // Get the latest test result for the product
      const latestTestResult = await db(tableName).select('Pass', 'Fail', 'Skip').orderBy('test_date', 'desc').first();

      // If there are test results, add to the total
      if (latestTestResult) {
        totalTests += latestTestResult.Pass + latestTestResult.Fail + latestTestResult.Skip;
      }
    }

    res.json({ totalTests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/:type/:product', async (req, res) => {
  const { type, product } = req.params;
  console.log('sdsd');
  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    const data = await db(tableName).select();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/:type/:product', validatePostData, async (req, res) => {
  const { type, product } = req.params;
  const { date, pass, fail, skip, percentage } = req.body;

  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    const dataToInsert =
      type === 'e2e' ? { test_date: date, Pass: pass, Fail: fail, Skip: skip } : { test_date: date, Percentage: percentage };

    await db(tableName).insert(dataToInsert);
    res.status(201).json({ message: 'Data added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/:type/:product/:id', async (req, res) => {
  const { type, product, id } = req.params;

  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    const deletedRows = await db(tableName).where({ id }).del();

    if (deletedRows > 0) {
      res.json({ message: 'Data deleted successfully' });
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server up at PORT:${PORT}`));
