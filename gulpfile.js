/* globals require */
(function() {
  'use strict';

  const gulp = require('gulp');
  const plugins = require('gulp-load-plugins')({lazy: false});
  const config = require('./gulp.config.js');
  
  gulp.task('help', plugins.taskListing);
  gulp.task('default', plugins.taskListing);
  
  gulp.task('lint', function() {
    gulp.src(config.alljs)
      .pipe(plugins.jshint())
      .pipe(plugins.jscs())
      .pipe(plugins.jscsStylish.combineWithHintResults())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.jshint.reporter('fail'));
  });

  gulp.task('test', function(done) {
    var Server = require('karma').Server;
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task('move', function() {
    let nodeModules = [].concat(
      'node_modules/babel-core/browser.min.js',
      'node_modules/systemjs/dist/system.js',
      'node_modules/systemjs/dist/system.js.map',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system-polyfills.js.map',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js.map'
    );

    return gulp.src(nodeModules)
      .pipe(gulp.dest('src/client/lib/vendor/'));
  });

  gulp.task('build', ['move'], function(done) {
    done();
  });

  gulp.task('connect', function() {
    plugins.connect.server({
      root: 'src/client/',
      livereload: true
    });
  });
})();
