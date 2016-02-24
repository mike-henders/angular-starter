/* global System */
System.config({
  baseURL: '.',
  transpiler: 'babel',
  babelOptions: {
  },
  map: {
    'babel': 'lib/vendor/browser.min.js',
    'system-polyfills': 'lib/vendor/system-polyfills.js',
    'vendor/angular.js': 'lib/vendor/angular.min.js',
    'vendor/jquery.js': 'lib/vendor/jquery.min.js',
  },
  meta: {
    'vendor/jquery.js': {
      format: 'global',
      exports: '$'
    },
    'vendor/angular.js': {
      format: 'global',
      exports: 'angular',
      deps: [
        'vendor/jquery.js'
      ]
    }
  } 
});
