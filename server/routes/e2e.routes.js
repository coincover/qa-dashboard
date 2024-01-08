const router = require('express').Router();

const { apiKeyCheck } = require('../controllers/apiKeyCheck.controller');
const { getTotalTests, getStatus } = require('../controllers/e2e.controller');

router.get('/totalTests', apiKeyCheck, getTotalTests);
router.get('/status', apiKeyCheck, getStatus);

module.exports = router;
