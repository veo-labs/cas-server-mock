'use strict';

require('./processRequire.js');

/**
 * Initializes grunt, load extensions and register tasks.
 */
module.exports = function(grunt) {
  const config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env,
    eslint: {
      server: {
        src: [
          'server.js',
          'Gruntfile.js',
          'processRequire.js',
          'lib/**/*.js'
        ]
      },
      client: {
        src: [
          'assets/components/**/*.js'
        ]
      }
    }
  };

  grunt.initConfig(config);

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-eslint');

};
