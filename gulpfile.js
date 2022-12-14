'use strict';
var gulp = require('gulp');
gulp.task('default', function() {
    console.log('Hello Gulp!')
});
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});