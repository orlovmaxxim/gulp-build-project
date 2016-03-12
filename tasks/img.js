var gulp = require('gulp');

gulp.task('img', function() {
  gulp.src('./dev/img/**/*')
    .pipe(gulp.dest('./dist/img/'));
});
