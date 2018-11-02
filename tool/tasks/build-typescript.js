const gulp = require('gulp');

module.exports = function () {
  var tsProject = ts.createProject("tsconfig.json");
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
    ;
}
