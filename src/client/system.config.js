/* global System */
System.config({
  baseURL: '.',
  transpiler: 'babel',
  babelOptions: {
  },
  map: {
    'babel': 'lib/vendor/browser.min.js',
    'system-polyfills': 'lib/vendor/system-polyfills.js'
  }
});
