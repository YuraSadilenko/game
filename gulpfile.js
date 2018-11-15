var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('autoprefix', function() {
    return gulp.src("css/main.css")
    .pipe(autoprefixer({
        browsers: ['last 5 version'],
        cascade: true
    }))
});

gulp.task('server', function() {
    gulp.src('')
      .pipe(server({
        livereload: true,
        defaultFile: "index.html",
        directoryListing: false,
        open: true
      }));
  });