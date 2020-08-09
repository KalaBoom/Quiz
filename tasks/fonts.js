const
    {src, dest} = require('gulp')

module.exports = function pages() {
    return src('assets/fonts/**/*')
        .pipe(dest('public/fonts'))
}