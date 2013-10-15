module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['src/tournament.sass'],
        tasks: ['default']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: "src",
          cssDir: "dist",
          raw: "preferred_syntax = :sass\n"
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', ['compass', 'cssmin']);
};
