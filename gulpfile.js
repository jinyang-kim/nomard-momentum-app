/*
  ==================================================
  Gulp Modules
  ==================================================
*/
const { src, dest, task, watch, series, parallel, lastRun } = require('gulp');
const del = require('del');
const gwebserver = require('gulp-webserver');
const gimagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const bro = require('gulp-bro');
const babelify = require('babelify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const ghPages = require('gulp-gh-pages');
const htmlExtend = require('gulp-html-extend');
const htmlMin = require('gulp-htmlmin');
const gconcat = require('gulp-concat');

const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const options = require("./config"); // 경로 및 기타 옵션 config.js
const static_di = "build/static/di/";

/*
  ==================================================
  Gulp Task
  ==================================================
*/
function clean() {
  console.log("\n\tBuild 폴더 정리.\n");
  return del(['build']);
}

function deploy_clean() {
  console.log("\n\tDeploy Build 폴더 정리.\n");
  return del([".publish"]);
}

function browser_sync(done) {
  browserSync.init({
		server: {
			baseDir: options.routes.root, // 서버에 띄울 폴더 위치 지정 
			index: `index.html`
		},
    port: options.config.port
	});
}

function preview_reload(done){
  console.log("\n\t브라우저 미리 보기 다시 로드 중.\n");
  browserSync.reload();
  done();
}

function gh() {
  return src("./**/*")
    .pipe(ghPages());
}

function watchFiles() {
  watch(`${options.routes}/**/*.html`, series(html, preview_reload));
  watch(`${options.routes.scss.watch}/**/*.scss`, series(styles, html, preview_reload));
  watch(`${options.routes.scss.watch_components}/**/*.scss`, series(styles, preview_reload));
  watch(`${options.routes.js.watch}/**/*.js`, series(js, preview_reload));
  console.log("\n\t변경 사항 감시..\n");
}

function watchFiles_stage() {
  watch(`${options.routes}/**/*.html`, series(html, preview_reload));
  watch(`${options.routes.scss.watch}/**/*.scss`, series(styles, html, preview_reload));
  watch(`${options.routes.scss.watch_components}/**/*.scss`, series(styles_stage, preview_reload));
  watch(`${options.routes.js.watch}/**/*.js`, series(js, preview_reload));
  console.log("\n\t변경 사항 감시..\n");
}

// 기존 소스 및 목차 index 페이지 복사
function file_copy() {
  src(`${options.routes.paths.src}pub_list/**`)
		.pipe(dest(options.routes.paths.build))
    .pipe(browserSync.stream());
  src(`${options.routes.paths.src}_lib/**`)
		.pipe(dest(static_di + "_lib"))
    .pipe(browserSync.stream());    
  return src(`${options.routes.paths.src}_fonts/**`)
    .pipe(dest(static_di + "fonts"))
    .pipe(browserSync.stream());
}

function html() {
  return src(`${options.routes}/**/*.html`, { since: lastRun(html) })
    .pipe(plumber())
    .pipe(
      htmlExtend({ annotations:false, verbose:false })
    )
    .pipe(htmlMin({ collapseWhitespace: false }))
    .pipe(dest(options.routes.html.dest))
    .pipe(browserSync.stream());
}

function js() {
  return src(`${options.routes.js.src}/**/*.js`, { since: lastRun(js) })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    // .pipe(bro({
    // 	transform: [
    // 		babelify.configure({ presets: ['@babel/preset-env'] })
    // 	]
    // }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(dest(options.routes.js.dest))
    .pipe(browserSync.stream());
}

function img() {
  return src(`${options.routes.img.src}/**/*`, { since: lastRun(img) })
    .pipe(plumber())
    // .pipe(gimagemin())
    .pipe(dest(options.routes.img.dest))
    .pipe(browserSync.stream());
}

function styles() {
  return src(`${options.routes.scss.src}/**/*.scss`, { since: lastRun(styles) })
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    // .pipe(csso())
    // .pipe(sourcemaps.write("./"))
    .pipe(dest(options.routes.scss.dest))
    .pipe(browserSync.stream());
}

function styles_stage() {
  return src(`${options.routes.scss.src}/**/*.scss`, { since: lastRun(styles) })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write("./"))
    .pipe(dest(options.routes.scss.dest))
    .pipe(browserSync.stream());
}

function buildFinish(done) {
  console.log("\n\t" + `빌드가 완료되었습니다. Build file 위치는 : ${options.routes.paths.build}\n`);
  done();
}

// 수정 전 default exports
// exports.default = series(
//   clean, 
//   parallel(img, html, styles, js, file_copy),
//   browser_sync,
//   watchFiles
// );

exports.default = series(
  clean, 
  img, 
  html, 
  styles, 
  js, 
  file_copy,
  parallel(browser_sync, watchFiles)
);

exports.build = series(
  clean,
  img, 
  html, 
  styles, 
  js, 
  file_copy,
  buildFinish
);
exports.clean = clean;
exports.stage = series(
  clean,
  img, 
  html, 
  styles_stage, 
  js, 
  file_copy,
  parallel(browser_sync, watchFiles_stage)
);
exports.deploy = series(
  clean,
  img, 
  html, 
  styles_stage, 
  js, 
  file_copy,
  parallel(gh, deploy_clean)
);