var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('html', function(){
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
	gulp.watch('source/*.html', ['html']);
});

gulp.task('build-js',function(){
	gulp.src(['source/underscore.js','source/functions.js','source/app.js'])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('public'));
});