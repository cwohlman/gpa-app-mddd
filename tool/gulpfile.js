const gulp = require('gulp');

// Run this using ./run from root
// all paths are relative to this file
// (gulp changes cwd to match this file's location)

gulp.task('start', function () {

});

function testDomain(done) {
  Object.keys(require.cache).forEach(key => delete require.cache[key]);
  try {
    require('../domain/test')();
    console.log('Success!');
  } catch (error) {
    console.log('Failure: ' + error.stack);
  }
  done && done();
}

gulp.task('test-domain', function () {
  testDomain();
  gulp.watch('../domain/**/*.js', testDomain);
});

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