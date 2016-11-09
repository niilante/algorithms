var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('ts', () => {
    return gulp.src('./src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('./src'));
});

gulp.task('watch', ['ts'], () => {
    gulp.watch('./src/**/*.ts', ['ts']);
});

gulp.task('default', ['watch']);