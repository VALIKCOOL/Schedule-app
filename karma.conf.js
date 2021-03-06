module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['commonjs', 'jasmine'],


        // list of files / patterns to load in the browser
        files: [
          './app/libs/jquery/jquery.js',
          './app/libs/angular/angular.js',
          './app/libs/angular-ui-router/angular-ui-router.js',
          './app/libs/angular-mocks/angular-mocks.js',
          './app/js/services/schedule.service.js',
          './app/js/services/schedule.service.spec.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './app/js/services/*.js': ['commonjs']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


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
        browsers: ['Chrome'],

        browserify: {
            debug: true,
            transform: []
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine', 'karma-commonjs','karma-browserify', 'karma-spec-reporter'],
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}