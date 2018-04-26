'use stricts';

module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
    },
    dev: {//按原文件结构压缩js文件夹内所有JS文件
        files: [{
            expand: true,
            cwd: 'src',//src目录下
            src: '**/*.js',//所有js文件
            dest: 'dist/js'//输出到此目录下
        }]
    },
    release: {//合并压缩
        files: {
            'dist/js/index.min.js': ['src/welcome.js', 'src/greet.js', 'src/app.js']
        }
    }
};