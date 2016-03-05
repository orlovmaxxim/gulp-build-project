var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
        js: {
            occurrence: 'dev/js/main.js',
            plugins: 'dev/js/_plugins/*.js',
            destination: 'dist/js'
        }
    }

gulp.task('js', function() {
  gulp.src('./app/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream: true}));
});
