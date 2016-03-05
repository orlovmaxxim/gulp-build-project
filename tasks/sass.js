var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
        scss: {
            occurrence: 'dev/sass/**/*.scss',
            destination: 'dist/css/'
        }
    }

gulp.task('sass', function () {
  gulp.src(paths.scss.occurrence)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.destination));
});
