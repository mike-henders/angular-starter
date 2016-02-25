/* global System */
System.config({
  baseURL: '.',
  transpiler: 'plugin-babel',
  map: {
    'plugin-babel': 'lib/vendor/plugin-babel.js',
    'systemjs-babel-build': 'lib/vendor/systemjs-babel-browser.js',
//    'system-polyfills': 'lib/vendor/system-polyfills.js',
    'vendor/angular.js': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js',
    'vendor/jquery.js': 'https://code.jquery.com/jquery-2.2.1.min.js'
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
  },
  paths: {
    'app/*': 'app/*'
  }
});
