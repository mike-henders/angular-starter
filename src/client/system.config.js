/* global System */
System.config({
  baseURL: '.',
  transpiler: 'babel',
  babelOptions: {
  },
  map: {
    'babel': 'lib/vendor/browser.min.js',
    'system-polyfills': 'lib/vendor/system-polyfills.js',
    'vendor/angular.js': 'lib/vendor/angular.min.js'
  },
  meta: {
    'vendor/angular.js': {
      format: 'global',
      exports: 'angular'
    }
  } 
});
