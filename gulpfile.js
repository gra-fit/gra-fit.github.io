var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');

function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

//// stylus tasks /////
gulp.task('styles', function(){
	gulp.src('css/*.styl')
		.pipe(stylus({
			use: [nib(), rupture(), jeet()]
			}))
		.on('error', errorLog)
		.pipe(gulp.dest('./css'));
	});

//// watch tasks /////
gulp.task('watch', function(){
		gulp.watch('css/*.styl', ['styles']);
	});

//// default tasks /////
gulp.task('default', ['styles', 'watch']);