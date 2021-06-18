module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        jshint: {
            all: ['js/*.js', '!js.min.js']
        },

        uglify: {
            dist: {
            files: {
                'js.min.js': ['js/blocs.js', 'js/bootstrap.js', 'js/formHandler.js', 'js/gmaps.js', 'js/jqBootstrapValidation.js', 'js/jquery-2.1.0.js', 'js/jqueryTouchSwipe.js', ] 
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask ('default', ['jshint', 'uglify']);
}