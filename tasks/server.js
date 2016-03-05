var gulp = require("gulp");
var browserSync = require('browser-sync');

var paths = {
        browserSync: {
            baseDir: './dist',
            watch: ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js']
        }
    }

gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: paths.browserSync.baseDir
    }
  });
});
