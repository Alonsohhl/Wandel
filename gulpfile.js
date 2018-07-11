const   gulp=require('gulp'),
        browserSync=require('browser-Sync').create(),
        sass=require('gulp-sass'),
        nodemon = require('gulp-nodemon'),
        autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/public/css'))
        //.pipe(browserSync.stream());
        
});


gulp.task('default', ['browser-sync'], function () {
   
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
       // files: ["public/**/*.*"],
     //   browser: ["google chrome", "firefox"],
        port: 7000,
    });
    gulp.watch("src/app/views/**/*.ejs").on('change', browserSync.reload);
    gulp.watch("src/public/img/**/*.svg").on('change', browserSync.reload);
    gulp.watch('./src/scss/**/*.scss', ['sass']).on('change', browserSync.reload);
});

gulp.task('nodemon', ['sass'], function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'src/index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

