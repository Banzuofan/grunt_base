'use stricts';

module.exports = {
    options: {
        sourceMap: false,
        presets: ["es2015"]
    },
    dist: {
        files: [
            {
                expand: true,
                cwd: 'dist/js/',
                src: ['**'],
                dest: 'dist/js/'
            },
            { expand: true, cwd: 'dist/userCenter/', src: ['*.js'], dest: 'dist/userCenter/' },
            { expand: true, cwd: 'dist/login/', src: ['*.js'], dest: 'dist/login/' },
        ]
    }
};