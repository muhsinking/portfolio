var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function(){
  return gulp.src('app/sass/styles.scss')
  .pipe(sass({style: 'expanded'}))
  .pipe(gulp.dest('app/css'))
});

gulp.task('views', function buildHTML() {
  return gulp.src('app/views/*.pug')
  .pipe(pug({style: 'expanded'}))
  .pipe(gulp.dest('app/html'))
});
