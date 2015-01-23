module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    keepalive: true,
                    base: '.'                    
                }
            }
        },
        uglify: {
            dev: {
                files: {
                    'assets/output.min.js': [
                        'js/main/**/*.js'
                    ]
                }
            }
        },
        // copy: {
        //     main: {
        //         files: [
        //             {expand: true, cwd: 'assets/', src: ['**'], dest: 'build/assets/'},
        //             {expand: true, cwd: 'js/', src: ['**'], dest: 'build/js/'},
        //             {expand: true, cwd: 'fonts/', src: ['**'], dest: 'build/fonts/'},
        //             {expand: true, cwd: 'images/', src: ['**'], dest: 'build/images/'},
        //             {expand: true, cwd: 'video/', src: ['**'], dest: 'build/video/'}
        //             // {expand: true, cwd: 'views/', src: ['**'], dest: 'dist/views/'}
        //         ]
        //     },
        //     single: {
        //         files: [
        //             {src: ['index.html'], dest: 'build/index.html'}
        //         ]
        //     }
        // },
        // htmlmin: {
        //     dist: {
        //         options: {
        //             removeComments: true,
        //             collapseWhitespace: true,
        //             removeEmptyAttributes: true,
        //             removeCommentsFromCDATA: true,
        //             removeRedundantAttributes: true,
        //             collapseBooleanAttributes: true
        //         },
        //         files: [
        //             // 'build/index.html': 'index.html'
        //             // {expand: true, cwd: '/', src: ['modules/*.html'], dest: 'build/modules/'}

        //         ]
        //     }
        // },
        cssmin: {
            combine: {
                files: {
                    'assets/style.min.css': [ 'style/**/*.css' ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    // 'style/mixin.css' : 'sass/mixin.scss',
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: ['style/**/*.css'],
                tasks: ['cssmin']
            },
            uglify: {
                files: ['js/main/**/*.js'],
                tasks: ['uglify']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // run tasks

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('min', ['watch']);
    grunt.registerTask('build', ['htmlmin','copy']);
};