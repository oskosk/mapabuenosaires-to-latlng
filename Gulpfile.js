var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src(['./src/proj4.js', './src/mapabuenosaires-to-latlng.js'])
    .pipe(concat('mapabuenosaires-to-latlng.js'))
    .pipe(gulp.dest('./dist/'))
});
