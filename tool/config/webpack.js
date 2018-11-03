
  const path = require('path');
  
  module.exports = {
    mode: 'development',
    entry: './client/index.js',
    devtool: 'inline-source-map',
    output: {
      path: path.resolve('./static'),
      filename: 'index.js'
    },
    devServer: {
      contentBase: './static',
      port: 3000,
    },
  };
  