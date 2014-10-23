var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['./src/proj4.js', './src/mapabuenosaires-to-latlon'])
    .pipe(concat('mapabuenosaires-to-latlon.js'))
    .pipe(gulp.dest('./dist/'))
});