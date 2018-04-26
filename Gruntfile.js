
'use strict';

module.exports = function (grunt) {

    var httpserver = require('./grunt_configs/httpserver.js');
    var cpy = require('./grunt_configs/copy.js');
    var clean = require('./grunt_configs/clean.js');
    var uglify = require('./grunt_configs/uglify.js');
    var watch = require('./grunt_configs/watch.js');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: uglify,
        jshint: {
            build: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: watch,///监测代码的更改
        clean: clean,///打包前清除dist下的文件
        copy: cpy,///将src下的文件拷贝到dist下面
        'http-server': httpserver,///启动服务器
    });


    ///加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-http-server');


    // grunt.registerTask('run', ['clean', 'jshint', 'copy', 'http-server:dev', 'watch']);
    grunt.registerTask('run', ['clean', 'copy', 'http-server:dev', 'watch']);
    // grunt.registerTask('copyfile', ['clean', 'jshint', 'copy']);
};
