// Based on Chris Coyier's Grunt boilerplate
// https://github.com/chriscoyier/My-Grunt-Boilerplate

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'css/build/application.css': 'css/sass/application.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/build/*.css',
        dest: 'css/build/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/build/minified/application.css': ['css/build/prefixed/application.css']
        }
      }
    },

    jshint: {
      beforeconcat: ['js/*.js']
    },

    concat: {
      dist: {
        src: [
          'js/vendor/*.js',
          'js/main.js'
        ],
        dest: 'js/build/main.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/main.js',
        dest: 'js/build/main.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);

  grunt.registerTask('dev', ['connect', 'watch']);

};