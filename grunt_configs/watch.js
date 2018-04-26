'use stricts';

module.exports = {
    build: {
        files: ['src/**'], ///监测src下面所有文件的更改
        // tasks: ['jshint', 'copy'],
        tasks: ['copy'],
        options: { spawn: false }
    }
};