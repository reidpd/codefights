module.exports = (grunt) => {
  grunt.initConfig({
    execute: {
      target: {
        src: ['database_server/app.js']
      }
    },
    watch: {
      scripts: {
        files: ['database_server/app.js'],
        tasks: ['execute'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
};
