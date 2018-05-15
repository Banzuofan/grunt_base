'use stricts';

module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
    },
    dev: {
        files: [
            { expand: true, cwd: 'dist/js/', src: ['*.js'], dest: 'dist/js' },
            { expand: true, cwd: 'dist/login/', src: ['**/*.js'], dest: 'dist/login' },
            { expand: true, cwd: 'dist/userCenter/', src: ['**/*js'], dest: 'dist/userCenter' },
        ]
    }
};