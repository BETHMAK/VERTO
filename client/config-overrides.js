const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve('process/browser'),
    http: require.resolve('stream-http'),
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer/'),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',  // Polyfill for process
      Buffer: ['buffer', 'Buffer'], // Polyfill for Buffer
    }),
  ];

  return config;
};
