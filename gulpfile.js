const gulp = require("gulp");
const path = require('path');
var clean = require('gulp-clean');
var argv = require('yargs').argv;

/**
* gulp task to clean the destination folder
*/
gulp.task("clear", function() {
    var destPath = path.resolve(process.cwd() + '/../quick-shop-node/dist/app');
    return gulp.src(
        [destPath+'/*'],
        {read: false}
      )
        .pipe(clean({force: true})); 
});

/**
* gulp task to move the content the destination folder
*/
gulp.task("migrate",  gulp.series('clear', function() {
    var isProduction = !argv.production ? false : true
    var distName = isProduction?'/production':'/development'
    var sourcePath = path.resolve(process.cwd() + '/src/../dist'+distName);
    var destPath = path.resolve(process.cwd() + '/../quick-shop-node/dist/app');
    return gulp.src([sourcePath+'/**'])
        .pipe(gulp.dest(destPath))
}));

/**
* gulp task to clear and migrate the content to the destination folder
*/
gulp.task("default",  gulp.series('migrate', function(){
    return new Promise(function(resolve, reject) {
        console.log("Build migrated successfully..");
        resolve();
      });
}));