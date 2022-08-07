import gulp from "gulp";

// Configurations
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
const sass = require("gulp-sass")(require("sass"));

// Обработка SCSS
const scss = () => {
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SCSS",
        message: error.message
      }))
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(size({ title: "main.css"}))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "main.min.css"}))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
}

export default scss