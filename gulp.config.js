/* globals module */
(function() {
  'use strict';

  var config = {
    alljs: [
      'gulpfile.js',
      'gulp.config.js',
      'karma.confg.js',
      'src/client/**/*.js',
      '!src/client/lib/vendor/**/*.js'
    ]
  };

  module.exports = config;
})();

