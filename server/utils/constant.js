const products = require('../../src/menu-items/product.json');

module.exports = {
  products: products.map((item) => item.api),
  jira_instance: 'https://coincover.atlassian.net/',
  sonar_cloud_instance: 'https://sonarcloud.io'
};
