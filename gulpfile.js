var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.
    src('test/test.js').
    pipe(mocha()).
    on('error', function(err) {
      this.emit('end');
    });
});

gulp.task('watch', function() {
  gulp.watch('test/*.js', ['test']);
  // gulp.watch('test/**', ['test']); tells gulp to watch all files in the test directory and run the 'test' task when one changes.
});
