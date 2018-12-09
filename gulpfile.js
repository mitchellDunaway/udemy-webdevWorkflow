var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create();


gulp.task('default', function(){
	console.log("fuck you");
});

gulp.task('html', function(){
	browserSync.reload();
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, autoprefixer, cssvars, nested]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html',function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});


});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
})
