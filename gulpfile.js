var gulp = require('gulp'),
	watch = require('gulp-watch');


gulp.task('default', function(){
	console.log("fuck you");
});

gulp.task('html', function(){
	console.log("imagine shity fucks");
});

gulp.task('styles', function(){
	console.log("poop back and forth forever");
});

gulp.task('watch', function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});