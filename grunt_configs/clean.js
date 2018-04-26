'use stricts';

module.exports = {
    build: {
        src: ['dist/**/*'],
        // filter: 'isFile',///This will clean only if the pattern matches an actual file, igonre folders.
        // filter: function (filepath) {
        //     return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
        // },///These will only clean folders that are empty.
    },
    onlyfiles: {
        src: ['dist/**/*'],
        filter: 'isFile',///This will clean only if the pattern matches an actual file, igonre folders.
    },
    ///didn't work
    // emptyfolders: {
    //     src: ['dist/js'],
    //     filter: function (filepath) {
    //         return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
    //     },///These will only clean folders that are empty.
    // }
};