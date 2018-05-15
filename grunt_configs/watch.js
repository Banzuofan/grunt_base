'use stricts';

module.exports = {
    build: {
        files: ['src/**'], ///监测src下面所有文件的更改
        // tasks: ['copy', 'babel', 'uglify:dev'],
        tasks: ['clean', 'copy', 'babel'],
        options: { spawn: false }
    }
};