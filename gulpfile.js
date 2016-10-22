/* 
 * The MIT License
 *
 * Copyright 2016 Damien Doussaud (namide.com).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict'

const gulp          = require('gulp');
const gutil         = require('gulp-util');

const browserify    = require('browserify');
const babelify      = require('babelify');
const watchify      = require('watchify');
const errorify      = require('errorify');
const buffer        = require('vinyl-buffer');
const source        = require('vinyl-source-stream');

const uglify        = require('gulp-uglify');



// bundle config
const bundleConfig = [
    {
        entrie : './src/gl/gl.js',
        name : 'dd-gl.js'
    }
];

// debug mode on if watch, off if build
let isWatching;


// --------------
//      HELPER
// --------------

function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}


// --------------
//      JS
// --------------

function initBundle() {

    for (let i = 0; i < bundleConfig.length; i++ ) {

        let bundleData = bundleConfig[i];
        let b = browserify({ 
                entries: [bundleData.entrie],
                extensions: ['.js'],
                cache: {},
                packageCache: {},
                plugin: isWatching ? [errorify, watchify] : [errorify]
            })
            .transform(babelify.configure({
                presets: ['es2015'],
                extensions: ['.js'],
                sourceMaps: isWatching
            }));

        if (isWatching) {
            b.on('update', () => { bundle(i); } );
        }

        b.on('log', gutil.log);
        bundleData.b = b;
        bundle(i);
    }
}

function bundle(i) {

    let b = bundleConfig[i].b;
    return b.bundle()
            .pipe(source(bundleConfig[i].name))
            .pipe(buffer())
            .pipe((!isWatching) ? uglify() : gutil.noop())
            .pipe(gulp.dest((isWatching) ? './build-dev/' :'./build/'));
}

// --------------
//      TASK
// --------------

gulp.task('watch', () => {
    isWatching = true;
    initBundle();
});

gulp.task('build', () => {
    isWatching = false;
    initBundle();
});
