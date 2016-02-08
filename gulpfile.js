var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');

// Оптимизация и подготовка CSS

gulp.task('styles', function () {
    gulp.src('css/sources/all-style.css')
        .pipe(concatCSS('style.css'))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename('style.min.css')) 
        .pipe(gulp.dest('css'))
        .pipe(notify('Task done!'));
});

// Отслеживание изменений CSS

gulp.task('watch', function () {
    gulp.watch('css/sources/*.css', ['styles']);
});

// Сжатие изображений

gulp.task('imgoptim', function () {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});