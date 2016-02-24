// Karma configuration
// Generated on Thu Jan 21 2016 19:41:08 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src/client/',

    plugins: ['karma-systemjs', 'karma-coverage', 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-babel-preprocessor'],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],

    systemjs: {
      configFile: 'system.config.js',

      config: {
        baseURL: '.',
        paths: {
          'phantomjs-polyfill': '../../node_modules/phantomjs-polyfill/bind-polyfill.js',
          'babel': '../../node_modules/babel-core/browser.js',
          'system-polyfills': '../../node_modules/systemjs/dist/system-polyfills.js',
          'systemjs': '../../node_modules/systemjs/dist/system.js',
          'es6-module-loader': '../../node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
        map: {
          'vendor/angular.js': 'lib/vendor/angular.min.js',
          'vendor/jquery.js':  'lib/vendor/jquery.min.js',
          'vendor/angular-mocks.js': 'lib/vendor/angular-mocks.js'
        },
        meta: {
          'vendor/angular-mocks.js': {
            format: 'global',
            deps: [
              'vendor/angular.js'
            ]
          }
        }
      }
    },

    // list of files / patterns to load in the browser
    files: [
      { 
        pattern: '**/lib/vendor/*.js',
        watched: false,
        included: false
      },
      { 
        pattern: '**/lib/vendor/*.js.map',
        watched: false,
        included: false
      },
      {
        pattern: 'app/**/*.js',
        included: false
      },
      'specs/*.spec.js',
      'specs/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['babel', 'sourcemap', 'coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      sourceFileName: function(file) {
        return file.originalpath;
      }
    },

    coverageReporter: {
      type: 'text',
      dir: 'coverage/',
      instrumenters: { isparta: require('isparta') },
      instrumenter: {
        'app/**/*.js': 'isparta'
      }
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
