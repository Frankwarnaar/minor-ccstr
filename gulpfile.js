var gulp        = require('gulp'),
	less        = require('gulp-less'),
	watch       = require('gulp-watch'),
	gutil       = require('gulp-util'),
	browserSync = require('browser-sync'),
	plumber     = require('gulp-plumber');

/* ============================================================
	Main tasks
   ============================================================ */

gulp.task('default', ['watch-less', 'watch-html', 'browser-sync']);

/* ============================================================
	Configuration
   ============================================================ */

var config = {
	assetsPath: 'assets',
	distPath: 'dist',
	debug: true
};

gulp.task('watch-less', ['less'], function () {
	return gulp.watch(config.assetsPath + '/styles/**/*.less', ['less']);
});

gulp.task('watch-html', ['less'], function () {
	return gulp.watch(['*.html', 'components/*.html']).on('change', browserSync.reload);
});

var handleError = function(err) {
	gutil.log(err);
	this.emit('end')
};

/* ============================================================
	Less
   ============================================================ */

gulp.task('less', function () {
	return gulp.src(config.assetsPath + '/styles/app.less')
		.pipe(plumber({
			errorHandler: handleError
		}))
		.pipe(less())
		.pipe(gulp.dest(config.distPath + '/css'))
		.pipe(browserSync.stream());
});

/* ============================================================
	Browser-sync
   ============================================================ */

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./",
		}
	});
});