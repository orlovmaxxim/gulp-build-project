var gulp = require('gulp');
var prettify = require('gulp-prettify');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
        jade: {
            occurrence: 'dev/jade/**/*.jade',
            compiled: 'dev/jade/_pages/*.jade',
            destination: 'dist'
        }
    }

gulp.task('jade', function() {
  gulp.src(paths.jade.compiled)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(jade())
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(paths.jade.destination))
    .pipe(reload({stream: true}));
});
