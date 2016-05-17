var gulp          = require( 'gulp' );  // Base gulp package
var rename        = require( 'gulp-rename' ); // Rename sources
var webpack       = require( 'webpack-stream' );
var webpackConfig = require( './webpack.config' );
var sass = require('gulp-sass');

gulp.task( 'default', function() {
    gulp.src( './src/*.js' )
        .pipe( webpack( webpackConfig ) )
        .pipe( rename( 'sc-react.js' ) )
        .pipe( gulp.dest( './dist/' ) );
} );

gulp.task( 'prototype', ['sass'], function() {
    gulp.src( './prototype/app.jsx' )
        .pipe( webpack( webpackConfig ) )
        .pipe( rename( 'app.js' ) )
        .pipe( gulp.dest( './prototype/' ) );
} );

gulp.task( 'sass', function() {
    gulp.src( './styles/index.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( rename( 'app.css' ) )
        .pipe( gulp.dest( './dist' ) );
} );