const router = require('express').Router();

const { apiKeyCheck } = require('../controllers/apiKeyCheck.controller');
const { jsonPlaceholderProxy } = require('../controllers/jira.proxy.controller');
const { sonarCloudPlaceholderProxy } = require('../controllers/sonarCloud.proxy.controller');

router.use('/rest/api', apiKeyCheck, jsonPlaceholderProxy);
router.use('/api', apiKeyCheck, sonarCloudPlaceholderProxy);
module.exports = router;
