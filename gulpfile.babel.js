/////////////////////////////
//Import Gulp dependencies //
/////////////////////////////

import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
var plugin = gulpLoadPlugins();



///////////////////////
//Primary Gulp tasks //
///////////////////////

gulp.task("build", function buildJS() {
    gulp.src("./src/**/*.js")
    .pipe(plugin.eslint())
    .pipe(plugin.eslint.format())
    .pipe(plugin.sourcemaps.init())
    .pipe(plugin.babel())
    .pipe(plugin.sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});
