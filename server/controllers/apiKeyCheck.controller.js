const error401 = require('../errors/401.js');

const API_KEY = process.env.REACT_APP_API_KEY;

const apiKeyCheck = (req, res, next) => {
  const userApiKey = req.header('API-Key');

  if (userApiKey && userApiKey === API_KEY) {
    next();
  } else {
    error401(req, res, next);
  }
};

module.exports = { apiKeyCheck };
