'use stricts';

module.exports = {
    main: {
        files: [
            { 
                expand: true, 
                cwd: 'libs/jquery', 
                src: ['**'], 
                dest: 'dist/vendor'
            },
            {
                expand: true,
                cwd: 'libs/requirejs',
                src: ['**'], 
                dest: 'dist/vendor'
            },
            { expand: true, cwd: 'src', src: ['*.html'], dest: 'dist' },
            { expand: true, cwd: 'src', src: ['*.css'], dest: 'dist' },
            { expand: true, cwd: 'src', src: ['*.js'], dest: 'dist' },
            { expand: true, cwd: 'src/login', src: ['**'], dest: 'dist/login' },
            { expand: true, cwd: 'src/userCenter', src: ['**'], dest: 'dist/userCenter' },
        ]
    }
};