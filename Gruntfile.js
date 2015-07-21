module.exports = function(grunt) {
  
  'use strict';
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-version');

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // JSHint
    jshint: {
      options: {
        jshintrc: true
      },
      
      scripts: ['<%= pkg.name %>.js']
    },
    
    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v.<%= pkg.version %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      
      dist: {
        src : '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    
    // Bower version
    bower_version: {
      update: []
    }
  });

  // Tasks
  grunt.registerTask('default', ['jshint', 'uglify', 'bower_version']);

};
