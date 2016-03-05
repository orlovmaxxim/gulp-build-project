var gulp = require('gulp');
var concat = require('gulp-concat');
var bc = './bower_components/';

gulp.task('bower', function() {

  gulp.src(bc + 'jquery/dist/jquery.js')
    .pipe(gulp.dest('./app/libs/jquery/'));
});
