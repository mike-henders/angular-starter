/* global System */
System.config({
  baseURL: '.',
  transpiler: 'babel',
  babelOptions: {
  },
  map: {
    'babel': 'lib/browser.js',
    'system-polyfills': 'lib/system-polyfills.js'
  }
});
