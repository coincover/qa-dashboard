const router = require('express').Router();

const { getTotalTests, getStatus } = require('../controllers/e2e.controller');

router.get('/totalTests', getTotalTests);
router.get('/status', getStatus);

module.exports = router;
