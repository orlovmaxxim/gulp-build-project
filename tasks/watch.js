var gulp = require("gulp");
var browserSync = require('browser-sync');

var paths = {
        jade: {
            occurrence: 'dev/jade/**/*.jade',
            compiled: 'dev/jade/_pages/*.jade',
            destination: 'dist'
        },

        scss: {
            occurrence: 'dev/sass/**/*.scss',
            destination: 'dist/css/'
        },

        compass: {
            config: 'config.rb',
            css: 'dist/css',
            scss: 'dev/sass',
            img: 'dist/img'
        },

        js: {
            occurrence: 'dev/js/main.js',
            plugins: 'dev/js/_plugins/*.js',
            destination: 'dist/js'
        },

        browserSync: {
            baseDir: './dist',
            watch: ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js']
        }
    }

gulp.task('watch', function () {
  // gulp.watch('./app/scss/**/*.scss', ['compass']);
  gulp.watch(paths.jade.occurrence, ['jade']);
  gulp.watch(paths.scss.occurrence, ['sass']);
  gulp.watch('./app/img/**/*', ['img']);
  gulp.watch('./app/libs/**/*', ['libs']);
  gulp.watch(paths.browserSync.watch).on('change', browserSync.reload);
});
