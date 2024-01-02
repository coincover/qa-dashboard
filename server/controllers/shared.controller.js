const { getTable, insertData, deleteData } = require('../models/e2e.model');
const { getTableName } = require('../utils/getTableName');
const createE2eSchema = require('../validators/create-e2e-schema');
const createUnitSchema = require('../validators/create-unit-schema');

const getAllDataFromTable = async (req, res) => {
  const { type, product } = req.params;
  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    const rawData = await getTable(tableName);

    let data;

    if (type === 'unit') {
      data = rawData.reduce((acc, item) => {
        const existingItem = acc.find((groupedItem) => groupedItem.pull_request === item.pull_request);

        if (existingItem) {
          existingItem.result.push({
            date: item.date,
            commit: item.commit,
            statement_coverage: item.statement_coverage,
            function_coverage: item.function_coverage,
            branch_coverage: item.branch_coverage,
            line_coverage: item.line_coverage,
            author: item.author
          });
        } else {
          acc.push({
            id: item.id,
            pull_request: item.pull_request,
            result: [
              {
                date: item.date,
                commit: item.commit,
                percentage: item.percentage,
                statement_coverage: item.statement_coverage,
                function_coverage: item.function_coverage,
                branch_coverage: item.branch_coverage,
                line_coverage: item.line_coverage,
                author: item.author
              }
            ]
          });
        }

        return acc;
      }, []);
    } else {
      data = rawData;
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createData = async (req, res) => {
  const { type, product } = req.params;

  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    let dataToInsert;

    if (type === 'e2e') {
      dataToInsert = createE2eSchema.validateSync(
        { date: req.body.date, pass: req.body.pass, fail: req.body.fail, skip: req.body.skip },
        {
          abortEarly: false,
          stripUnknown: true
        }
      );
    } else if (type === 'unit') {
      dataToInsert = createUnitSchema.validateSync(
        {
          date: req.body.date,
          percentage: req.body.percentage,
          pull_request: req.body.pull_request,
          commit: req.body.commit,
          statement_coverage: req.body.statement_coverage,
          function_coverage: req.body.function_coverage,
          branch_coverage: req.body.branch_coverage,
          line_coverage: req.body.line_coverage,
          author: req.body.author
        },
        {
          abortEarly: false,
          stripUnknown: true
        }
      );
    }

    await insertData(tableName, dataToInsert);
    res.status(201).json({ message: 'Data added successfully' });
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteDataRow = async (req, res) => {
  const { type, product, id } = req.params;

  try {
    const tableName = getTableName(type, product);

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid type or product' });
    }

    const deletedRows = await deleteData(tableName, id);
    if (deletedRows > 0) {
      res.json({ message: 'Data deleted successfully' });
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getAllDataFromTable,
  createData,
  deleteDataRow
};
