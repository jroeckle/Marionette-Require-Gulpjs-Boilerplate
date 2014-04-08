var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	rjs = require('gulp-requirejs');


//Minify CSS
gulp.task('minCSS', function() {
	//start with Normalize and then pull the rest of the stylesheets
	gulp.src(['./public/css/normalize.min.css','./public/css/*.css'])
		.pipe(concat('styles.css'))
		.pipe(minifyCSS({
			debug : false
		}))
		.pipe(gulp.dest('./public/css/app.min.css'));
});

//Compress Images
gulp.task('images', function() {
	gulp.src('public/img/**/*')
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('public/img/build'));
});

//Lint JS
gulp.task('lint', function() {
	gulp.src(['public/js/app/**/*.js', '!public/js/app/**/*min.js'])
		.pipe(jshint());
});

gulp.task('rjs', function() {
	//run r.js 
	rjs({
		baseUrl: "public/js/app",
		paths: {
			"app": "config/Init"
		},
		wrap: false,
		name: "../libs/almond/almond",
		preserveLicenseComments: false,
		optimize: "uglify",
		mainConfigFile: "public/js/app/config/Init.js",
		include: ["app"],
		out: "public/js/app/config/Init.min.js"
	})
		.pipe(gulp.dest('./'));

});

//run site build
gulp.task('build', ['rjs', 'images', 'minCSS', 'lint']);

//default for gulp command
gulp.task('default', ['build']);