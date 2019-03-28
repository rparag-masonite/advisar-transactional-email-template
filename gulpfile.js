var gulp = require('gulp')
var mjml = require('gulp-mjml')

var path = {
  mjml: 'src/**/*.mjml',
  public: './public',
};

gulp.task('compile', function () {
  return gulp.src(path.mjml)
    .pipe(mjml())
    .pipe(gulp.dest(path.public))
})

gulp.task('watch', function () {
  gulp.watch(path.mjml, gulp.series('compile'));
})

gulp.task('default', gulp.series('compile', 'watch'));
