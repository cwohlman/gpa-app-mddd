const babel = require("@babel/core");
const fs = require('fs');
const { performance } = require('perf_hooks');

const watchFunction = require('../watch-function');

module.exports = function () {
  const watcher = require('chokidar').watch(['./view-domain/views']).on('all', function (event, path) {
    if (/\.jsx$/.test(path)) {
      const out = path.replace(/\.jsx$/, '-view.js');
      performance.mark('Start');
      if (event === 'unlink') {
        try {
          fs.unlinkSync(out)
        } catch (error) {
          console.log(error);
        }
        console.log('Removed: ' + path);
        performance.mark('End');
        performance.measure('Duration', 'Start', 'End');
      } else {
        babel.transform(fs.readFileSync(path), {
          plugins: ["@babel/plugin-transform-react-jsx"]
        }, function (err, result) {
          fs.writeFileSync(out, result.code);
          console.log('Transformed: ' + path);
          performance.mark('End');
          performance.measure('Duration', 'Start', 'End');
        });
      }
    }
  });

  watchFunction(() => {}, () => watcher.close());
}
