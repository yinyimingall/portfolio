var gulp = require('gulp'),
    connect = require('gulp-connect'); //使用connect启动一个Web服务器

gulp.task('connect', function () {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./assets/css/*.css'], ['css']);
    gulp.watch(['./assets/js/*.js'], ['js']);
    gulp.watch(['./*.html'], ['html']);

});

gulp.task('default', ['connect', 'watch']);
