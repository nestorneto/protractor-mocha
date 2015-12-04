'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({

        protractor: {
            test: {
                options: {
                    configFile: "protractor.conf.js",
                    keepAlive: true,
                    webdriverManagerUpdate: true,
                    noColor: false,
                    args: {
                        verbose: false,
                        capabilities: { browserName: 'chrome' }
                    }
                }
            }
        }

    });

    grunt.registerTask('default', 'protractor:test');

};
