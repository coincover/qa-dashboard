require('dotenv').config();
const db = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const validatePostData = (req, res, next) => {
  const { date, pass, fail, skip } = req.body;

  if (!date || !pass || !fail || !skip) {
    return res.status(400).json({ error: 'All fields are required (date,pass,fail,skip)' });
  }

  if (typeof date !== 'string' || typeof pass !== 'string' || typeof fail !== 'string' || typeof skip !== 'string') {
    return res.status(400).json({ error: 'All fields must be of type string' });
  }

  next();
};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/identity-service', async (req, res) => {
  try {
    const date = await db('identity_service').select();
    res.json(date);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/identity-service', async (req, res) => {
  const { date, pass, fail, skip } = req.body;

  try {
    await db('identity_service').insert({
      Date: date,
      Pass: pass,
      Fail: fail,
      Skip: skip
    });
    res.status(201).json({ message: 'Data added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/identity-service/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedRows = await db('identity_service').where({ id }).del();

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
