var gulp     = require('gulp'),
	imagemin = require('gulp-imagemin'),
	jshint   = require('gulp-jshint'),
	concat   = require('gulp-concat'),
	uglify   = require('gulp-uglify'),
	pngcrush = require('imagemin-pngcrush'),
	rjs      = require('gulp-requirejs');


//Compress Images
gulp.task('images', function() {
	gulp.src('public/img-src/**/*')
		.pipe(imagemin({
			progressive       : true,
			optimizationLevel : 5
		}))
		.pipe(gulp.dest('public/img'));
});

//Lint JS
gulp.task('lint', function() {
	gulp.src(['public/js/app/**/*.js', '!public/js/app/**/*min.js'])
		.pipe(jshint());
});

gulp.task('rjs', function() {
	//run r.js 
	rjs({
		baseUrl : "public/js/app",
		paths   : {
			"app" : "config/Init"
		},
		findNestedDependencies : true,
		wrap: false,
		name: "../libs/almond/almond",
		preserveLicenseComments: false,
		removeCombined: true,
		optimize: "uglify2",
		mainConfigFile: "public/js/app/config/Init.js",
		include: ["app"],
		out: "public/js/app/config/Init.min.js"
	})
	.pipe(uglify())
	.pipe(gulp.dest('./'));

});

//run site build
gulp.task('dist', ['rjs', 'images', 'lint']);

//default for gulp command
gulp.task('default', ['dist']);