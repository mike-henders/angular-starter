/* globals require */
(function() {
  'use strict';

  const gulp = require('gulp');
  const plugins = require('gulp-load-plugins')({lazy: false});
  const config = require('./gulp.config.js');
  
  gulp.task('help', plugins.taskListing);
  gulp.task('default', plugins.taskListing);
  
  gulp.task('lint', () => {
    gulp.src(config.alljs)
      .pipe(plugins.jshint())
      .pipe(plugins.jscs())
      .pipe(plugins.jscsStylish.combineWithHintResults())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.jshint.reporter('fail'));
  });
})();
