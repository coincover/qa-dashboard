const error401 = require('../errors/401.js');

function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

process.env.REACT_APP_API_KEY = generateRandomString(10);
console.log(process.env.REACT_APP_API_KEY);

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
