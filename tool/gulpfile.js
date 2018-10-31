const gulp = require('gulp');
const spawn = require('child_process').spawn;

// Run this using ./run from root
// all paths are relative to this file
// (gulp changes cwd to match this file's location)

gulp.task('start', function () {

});

function testDomain(done) {
  // Object.keys(require.cache).forEach(key => delete require.cache[key]);
  try {
    require('../domain/test')();
    console.log('Success!');
  } catch (error) {
    console.log('Failure: ' + error.stack);
  }
  done && done();
}

gulp.task('test-domain', testDomain);

gulp.task('watch-test-domain', function () {
  testDomain();
  const watcher = gulp.watch('../domain/**/*.js', testDomain);

  watcher.on('change', function(path, stats) {
    delete require.cache[require.resolve(path)];
  });
  
  watcher.on('unlink', function(path, stats) {
    delete require.cache[require.resolve(path)];
  });

  return watcher;
})

gulp.task('typescript', function () {
  var tsProject = ts.createProject("tsconfig.json");
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
    ;
})

function testViewDomain(done) {
  Object.keys(require.cache).forEach(key => delete require.cache[key]);
  try {
    require('../view-domain/test')();
    console.log('Success!');
  } catch (error) {
    console.log('Failure: ' + error.stack);
  }
  done && done();
}

gulp.task('test-view-domain', function () {
  testViewDomain();
  gulp.watch('../view-domain/**/*.js', testViewDomain);
});

function testClient(done) {
  Object.keys(require.cache).forEach(key => delete require.cache[key]);
  try {
    require('../client/test')();
    console.log('Success!');
  } catch (error) {
    console.log('Failure: ' + error.stack);
  }
  done && done();
}

gulp.task('test-client', function () {
  testClient();
  gulp.watch('../client/**/*.js', testClient);
});

let webpackProcess;

function startWebpack(done) {
  webpackProcess && webpackProcess.kill();
  webpackProcess = spawn('npx', ['webpack-dev-server', '--open', '--config', './webpack.js'], { stdio: 'inherit' }).on('exit', onDone);

  function onDone() {
    done && done();
  }
}

gulp.task('dev-server', function () {
  startWebpack();
  gulp.watch('./webpack.js', startWebpack);
});