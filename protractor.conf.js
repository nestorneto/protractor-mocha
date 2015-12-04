'use strict';

exports.config = {
    directConnect: true,
    //stackTrace: false,

    suites: {
        main: '*.spec.js'
    },

    baseUrl: 'http://localhost',

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        timeout: 11000
    },

    // The params object will be passed directly to the Protractor instance,
    // and can be accessed from your test as browser.params. It is an arbitrary
    // object and can contain anything you may need in your test.
    params: {},

    onBefore: function () {
    },

    // A callback function called once protractor is ready and available, and
    // before the specs are executed.
    // If multiple capabilities are being run, this will run once per
    // capability.
    // You can specify a file containing code to run by setting onPrepare to
    // the filename string.
    onPrepare: function() {

    }
};
