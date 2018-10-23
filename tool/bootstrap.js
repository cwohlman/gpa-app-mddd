#!/usr/bin/env node

let gulpfile = require.resolve('./gulpfile');

let args = ['--gulpfile', gulpfile].concat(process.argv.slice(2));

let cleanExit;
let noRestart;
let dead;
function exit() {
  if (noRestart) {
    log('Bye!');
    return;
  }

  dead = true;

  if (! cleanExit) {
    log('Done.');
    log('Waiting for gulpfile change...');
    return;
  }

  setTimeout(function () {
    child = start();
  }, cleanExit ? 1 : 1000);
}

function start() {
  cleanExit = false;
  const child = require('child_process').spawn('./node_modules/.bin/gulp', args, { stdio: 'inherit' });
  child.on('close', exit);
  return child;
}

function restart() {
  log('Restarting...');
  if (dead) {
    start();
  } else {
    cleanExit = true;
    child.kill();
  }
}

function log(message) {
  // TODO: Special color
  console.log('Bootstrap: ' +  message);
}

let child = start();

require('fs').watchFile(gulpfile, function () {
  log('Detected gulpfile change.');  
  restart();
});

process.on('exit', function () {
  noRestart = true;
  child.kill();
});
