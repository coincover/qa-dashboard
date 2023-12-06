const router = require('express').Router();

const { jsonPlaceholderProxy } = require('../controllers/jira.proxy.controller');
const { sonarCloudPlaceholderProxy } = require('../controllers/sonarCloud.proxy.controller');

router.use('/rest/api', jsonPlaceholderProxy);
router.use('/api', sonarCloudPlaceholderProxy);
module.exports = router;
