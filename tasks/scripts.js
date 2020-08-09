const
    {src, dest} = require('gulp'),
    terser      = require('gulp-terser'),
    sourcemaps  = require('gulp-sourcemaps'),
    plumber     = require('gulp-plumber'),
    rename      = require('gulp-rename')

module.exports = function scripts() {
    return src('assets/scripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(terser())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('public/scripts'))
}