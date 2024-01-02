const proxy = require('http-proxy-middleware');

module.exports = {
  sonarCloudPlaceholderProxy: proxy({
    target: require('../utils/constant').sonar_cloud_instance,
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Accept', 'application/json');
      proxyReq.setHeader('X-Atlassian-Token', 'no-check');
      proxyReq.setHeader('cookie', '');
      proxyReq.setHeader('User-Agent', '');
      proxyReq.setHeader('Authorization', 'Bearer ' + process.env.SONAR_CLOUD_TOKEN);
    },
    onProxyRes: function (proxyRes) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Headers'] = '*';
      proxyRes.headers['Access-Control-Max-Age'] = '600';
    }
  })
};
