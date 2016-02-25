/* globals require */
(function() {
  'use strict';

  const gulp = require('gulp');
  const plugins = require('gulp-load-plugins')({lazy: false});
  const config = require('./gulp.config.js');
  const Builder = require('systemjs-builder');
  
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
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery/dist/jquery.min.map',
      'src/lib/browser.min.js',
      'src/lib/external-helpers.min.js',
      'node_modules/systemjs/dist/system.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/systemjs/dist/system.js.map',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system-polyfills.js.map',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
      'node_modules/angular/angular.min.js',
      'node_modules/angular/angular.min.js.map',
      'node_modules/angular-mocks/angular-mocks.js'
    );

    return gulp.src(nodeModules)
      .pipe(gulp.dest('src/client/lib/vendor/'));
  });

  gulp.task('build', ['move'], function(done) {
    var builder = new Builder('src/client/', 'src/client/system.config.js');
    builder.config({
      paths: {
        'node_modules/': './node_modules/',
        'plugin-babel.js': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-node.js': './node_modules/systemjs-plugin-babel/systemjs-babel-node.js'
      },
      map: {
        'plugin-babel': 'plugin-babel.js',
        'systemjs-babel-build': 'systemjs-babel-node.js'
      }
    });
    builder.bundle('app/app.js', 'src/client/dist/bundle.js', {
      minify: true,
      sourceMaps: true
    })
    .then(function() {
      console.log('Build complete');
      done();
    })
    .catch(function(err) {
      console.error(err);
      done();
    });
  });

  gulp.task('connect', function() {
    plugins.connect.server({
      root: 'src/client/',
      livereload: true
    });
  });
})();
