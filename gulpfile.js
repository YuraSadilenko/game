var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sсss/main.scss', ['sass']);
});

gulp.task('autoprefix', function() {
    return gulp.src("./css/main.css")
    .pipe(autoprefixer({
        browsers: ['last 5 version'],
        cascade: true
    }))
    .pipe(gulp.dest("css/main.css"))
});

gulp.task('watch', function() {
    return watch('css/*.css', {ignorInitial: false})
    .pipe(gulp.dest("./css/*.css"))
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