const { PerformanceObserver, performance } = require('perf_hooks');
const path = require('path');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

const Module = require('module');
const oldRequire = Module.prototype.require;
const watcher = require('chokidar').watch([]).on('all', function (event, path) {
  if (event !== 'add') {
    delete require.cache[path];
    if (maps[path]) {
      maps[path].forEach(p => delete require.cache[p]);
    }
    start();
  }
});

const paths = [];
let maps = {};
let mapping = [];
Module.prototype.require = function (id) {
  const path = Module._resolveFilename(id, this);

  if (/^\./.test(id) && paths.indexOf(id) === -1) {
    watcher.add(path);
    paths.push(path);
  }
  maps[path] = mapping.concat([]);

  mapping.push(path);
  const result = oldRequire.call(this, path);
  mapping.pop();
  return result;
}

function start() {
  maps = {};
  console.log('Starting...');
  try {
    performance.mark('Start');
    // TODO: require('./task')(process.argv[2])
    require(process.argv[2])();
    performance.mark('End');
  } catch (error) {
    performance.mark('End');
    console.log('Error: ', error);
  }
  console.log('Done!');
  performance.measure('Duration', 'Start', 'End');
}

start();
