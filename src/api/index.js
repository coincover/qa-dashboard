require('dotenv').config();
const db = require('./db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 5001;
const jira_instance = 'https://coincover.atlassian.net/';
const jsonPlaceholderProxy = proxy({
  target: jira_instance,
  changeOrigin: true,
  logLevel: 'debug',
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Accept', 'application/json');
    proxyReq.setHeader('X-Atlassian-Token', 'no-check');
    proxyReq.setHeader('cookie', '');
    proxyReq.setHeader('User-Agent', '');
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Headers'] = '*';
    proxyRes.headers['Access-Control-Max-Age'] = '600';
  }
});

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/rest/api', jsonPlaceholderProxy);

const getTableName = (type, product) => {
  if (type === 'e2e' || type === 'unit') {
    return `${type}_${product}`;
  }
  return null;
};

const validatePostData = (req, res, next) => {
  const { type } = req.params;

  const { date, pass, fail, skip, percentage, commit, pull_request } = req.body;

  if (type === 'e2e') {
    if (!date || !pass || !fail || !skip) {
      return res.status(400).json({ error: 'For e2e, all fields are required (date, pass, fail, skip)' });
    }
    if (typeof date !== 'string' || typeof pass !== 'string' || typeof fail !== 'string' || typeof skip !== 'string') {
      return res.status(400).json({ error: 'For e2e, all fields must be a string (date, pass, fail, skip)' });
    }
  }
  if (type === 'unit' && typeof percentage !== 'number') {
    return res.status(400).json({ error: 'For unit, date is required, and percentage must be a number' });
  }

  // If commit or pull_request is present, ensure they are of type string
  if ((commit || pull_request) && (typeof commit !== 'string' || typeof pull_request !== 'string')) {
    return res.status(400).json({ error: 'If present, commit and pull_request must be of type string' });
  }

  next();
};

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
      const lastResult = await db(tableName).select().orderBy('id', 'desc').first();

      // Check if there's data for the product
      if (!lastResult) {
        results[product] = { status: 'unknown', result: 'No results available' };
      } else {
        // Calculate the overall status based on pass and fail
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
      const latestTestResult = await db(tableName).select('pass', 'fail', 'skip').orderBy('id', 'desc').first();
      // If there are test results, add to the total
      if (latestTestResult) {
        totalTests += latestTestResult.pass + latestTestResult.fail + latestTestResult.skip;
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
  const { date, pass, fail, skip, percentage, commit, pull_request } = req.body;

  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    let dataToInsert;

    if (type === 'e2e') {
      dataToInsert = { date, pass, fail, skip };
    } else if (type === 'unit') {
      dataToInsert = { date, percentage, commit, pull_request };
    }

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
