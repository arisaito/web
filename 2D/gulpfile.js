var gulp = require('gulp');
var pug = require('gulp-pug');
 
gulp.task('pug', () => {
    gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'],{ base: './pug' })
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./html/'));
});
 
gulp.task('autoBuild', ['pug'], function() {
    gulp.watch(['./pug/**/*.pug'], ['pug']);
})
 
