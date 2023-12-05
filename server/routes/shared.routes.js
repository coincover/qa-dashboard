const router = require('express').Router();

const { getAllDataFromTable, createData, deleteDataRow } = require('../controllers/shared.controller');

router.get('/:type/:product', getAllDataFromTable);
router.post('/:type/:product', createData);
router.delete('/:type/:product/:id', deleteDataRow);

module.exports = router;
