var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass:watch', function () {
    // Endless stream mode
    return watch('sass/*.scss', { ignoreInitial: false })
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('/app/dist'));
});

gulp.task('default', ['sass:watch']);
