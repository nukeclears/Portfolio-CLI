// gulpfile.js
const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
var postcssNesting =  require('postcss-nesting');
const imagemin = require("gulp-imagemin");

// css
function cssTask(cb) {
    return src("./docs/styles/*.css") // read directory
        .pipe(postcss()) // compile with postcss
        .pipe(dest("./docs/compiled")) // output
        .pipe(browserSync.stream());
    cb();
}

// function imageminTask(cb) {
//     return src("./assets/images/*")
//         .pipe(imagemin())
//         .pipe(dest("./assets/images"));
//     cb();
// }

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: "./docs/",
            index: "index.html"
        },
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

function watchTask() {
    watch("./**/*.html", series(cssTask, browsersyncReload));
    watch(["./docs/styles/*.css"], series(cssTask, browsersyncReload));
}

exports.default = series(cssTask, browsersyncServe, watchTask);
exports.css = cssTask;
//exports.images = imageminTask;