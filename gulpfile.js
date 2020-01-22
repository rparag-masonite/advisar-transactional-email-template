const gulp = require('gulp')
const mjml = require('gulp-mjml')
const imagemin = require('gulp-imagemin')

const path = {
  mjml: 'src/*.mjml',
  public: './public',
  images: 'src/images/*.png',
  imageDest: './public/images'
};

gulp.task('compile', function () {
  return gulp.src(path.mjml)
    .pipe(mjml())
    .pipe(gulp.dest(path.public))
})

gulp.task('images', function () {
  return gulp.src(path.images)
    .pipe(imagemin())
    .pipe(gulp.dest(path.imageDest))
})

gulp.task('watch', function () {
  gulp.watch(path.mjml, gulp.series('compile', 'images'));
})

gulp.task('default', gulp.series('compile','images', 'watch'));