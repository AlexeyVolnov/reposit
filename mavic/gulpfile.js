const {src, dest, watch, parallel,series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/fullpage.js/dist/fullpage.js',
        'app/js/main.js',
        'app/js/slick.js'
    ])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}
function styles() {
    return src([
        'app/scss/*.scss',
        'node_modules/fullpage.js/dist/fullpage.css'
    ])
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());

}
function images() {
    return src('app/images/**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}
function watching() {
    watch(['app/**/*.scss'], styles);
    watch(['app/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);

}
function cleanDist() {
    return del('dist')
}
async function build() {
    src(['app/js/main.min.js', 'app/css/style.min.css', 'app/*.html', 'app/fonts/**/*.*'], {base: 'app'}).pipe(dest('dist'));
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist,images,build);
exports.default = parallel(styles, scripts, browsersync, watching);