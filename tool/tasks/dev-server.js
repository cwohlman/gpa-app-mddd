const spawn = require('child_process').spawn;
const fs = require('fs');

const watchChild = require('../watch-child');

module.exports = function restart() {
  const webapckConfig =
  `
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
  `;

  fs.writeFileSync('./tool/config/webpack.js', webapckConfig);

  watchChild(() => spawn('npx', ['webpack-dev-server', '--config', './tool/config/webpack.js'], { stdio: 'inherit' }));
}
