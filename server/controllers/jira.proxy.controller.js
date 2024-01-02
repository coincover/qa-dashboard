const proxy = require('http-proxy-middleware');

module.exports = {
  jsonPlaceholderProxy: proxy({
    target: require('../utils/constant').jira_instance,
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Accept', 'application/json');
      proxyReq.setHeader('X-Atlassian-Token', 'no-check');
      proxyReq.setHeader('cookie', '');
      proxyReq.setHeader('User-Agent', '');
      proxyReq.setHeader(
        'Authorization',
        'Basic ' + Buffer.from(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`).toString('base64')
      );
    },
    onProxyRes: function (proxyRes) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Headers'] = '*';
      proxyRes.headers['Access-Control-Max-Age'] = '600';
    }
  })
};
