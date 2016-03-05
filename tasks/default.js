var gulp = require('gulp');

gulp.task('default', [
    'bower',
    'libs',
    'sass',
    'img',
    'jade',
    'js',
    'server',
    'watch'
]);
