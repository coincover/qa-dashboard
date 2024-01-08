const router = require('express').Router();

const { apiKeyCheck } = require('../controllers/apiKeyCheck.controller');
const { getAllDataFromTable, createData, deleteDataRow } = require('../controllers/shared.controller');

router.get('/:type/:product', apiKeyCheck, getAllDataFromTable);
router.post('/:type/:product', createData);
router.delete('/:type/:product/:id', apiKeyCheck, deleteDataRow);

module.exports = router;
