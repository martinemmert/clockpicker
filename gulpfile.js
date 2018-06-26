const gulp = require("gulp");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const qunit = require("gulp-qunit");
const replace = require("gulp-replace");
const version = require("./package").version;
const versionRegExp = /\{package\.version\}/;
const cleanDest = require("gulp-clean-dest");

gulp.task("js", function() {
  return gulp
    .src("src/clockpicker.js")
    .pipe(replace(versionRegExp, version))
    .pipe(cleanDest("dist"))
    .pipe(gulp.dest("dist"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanDest("dist"))
    .pipe(gulp.dest("dist"));
});

gulp.task("css:bootstrap", function() {
  return gulp
    .src("src/clockpicker.css")
    .pipe(rename({ prefix: "bootstrap-" }))
    .pipe(cleanDest("dist"))
    .pipe(gulp.dest("dist"))
    .pipe(minifyCSS({ keepSpecialComments: 1 }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("css:standalone", function() {
  return gulp
    .src(["src/standalone.css", "src/clockpicker.css"])
    .pipe(concat("clockpicker.css"))
    .pipe(rename({ prefix: "standalone-" }))
    .pipe(cleanDest("dist"))
    .pipe(gulp.dest("dist"))
    .pipe(minifyCSS({ keepSpecialComments: 1 }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("css", gulp.parallel(["css:bootstrap", "css:standalone"]));

gulp.task("watch", function() {
  gulp.watch("src/**/*.js", gulp.series("js"));
  gulp.watch("src/**/*.css", gulp.series("css"));
});

gulp.task("test", function() {
  return gulp.src("test/*.html").pipe(qunit());
});

gulp.task("default", gulp.parallel(["js", "css"]));
