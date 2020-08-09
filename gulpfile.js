const
    {watch, series} = require('gulp'),
    styles  = require('./tasks/styles'),
    scripts = require('./tasks/scripts'),
    images  = require('./tasks/images'),
    clean   = require('./tasks/del'),
    fonts   = require('./tasks/fonts')

function watcher(){
    watch('assets/scss/**/*.scss', styles)
    watch('assets/scripts/**/*.js', scripts)
}

module.exports.start = series(clean, styles, scripts, images, fonts, watcher)

