const router = require('express').Router();

const { jsonPlaceholderProxy } = require('../controllers/jira.proxy.controller');

router.use('/rest/api', jsonPlaceholderProxy);

module.exports = router;
