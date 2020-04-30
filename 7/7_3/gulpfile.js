var gulp = require('gulp');
gulp.task('html', function(){
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});


gulp.task('watch',function(){
	gulp.watch('source/*.html',['html']);
});