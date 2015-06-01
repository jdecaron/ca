/**
 * Grunt tasks for simple TypeScript projects.
 *
 * @author: Jeremie Pelletier <jeremie.pelletier@frimastudio.com>
 * @copyright © 2014 Frima
 */
'use strict';

module.exports = function(grunt) {
    // Load task definitions.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-ts');

    var onError = function(errorInfo) {
        console.error(arguments);
    };

    // TypeScript configuration factory.
    var tsConfig = function() {
        var config = {
            src:       ['src/**/*.ts',
                        'lib/**/*.ts',
                        'd.ts/**/*.d.ts'],
            reference: 'src/_references.ts',
            outDir:    'public/js/game',
            options: {
                allowImportModule: true,
                declaration:       true,
                verbose:           true
            },
			watch: 'src'
        };

        return config;
    };

    // Grunt configuration.
    grunt.initConfig({
        ts: {
            release: tsConfig()
        },

        connect: {
            server: {
                options: {
                    protocol:   'http',
                    hostname:   '*',
                    port:       80,
                    keepalive:  true,
                    base:       ['.'],
                    middleware: function(connect, options) {
                        var middlewares = [connect.bodyParser()];

                        middlewares.push(function(req, res, next) {
                            // Client errors.
                            if(/^\/debug\/error\/?$/.test(req.url)) {
                                onError(req.body);
                            }
                            // Static files route.
                            else {
                                next();
                            }
                        });

                        // Static file handlers.
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });

                        return middlewares;
                    }
                }
            }
        }
    });
};
