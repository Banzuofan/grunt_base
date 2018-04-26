'use stricts';

module.exports = {
    main: {
        files: [
            { 
                expand: true, 
                cwd: 'libs/jquery', // Parent folder of original CSS templates
                src: ['**'], // Collects all `*.js` files within the parent folder (and its subfolders)
                dest: 'dist/js' // Stores the collected `*.css` files in your `src/css/` folder
            },
            {
                expand: true,
                cwd: 'libs/requirejs', // Parent folder of original CSS templates
                src: ['**'], // Collects all `*.js` files within the parent folder (and its subfolders)
                dest: 'dist/js' // Stores the collected `*.css` files in your `src/css/` folder
            },
            { expand: true, cwd: 'src', src: ['*.html'], dest: 'dist' },
            { expand: true, cwd: 'src', src: ['*.js'], dest: 'dist/js' },
            { expand: true, cwd: 'src/login', src: ['**'], dest: 'dist/login' },
            { expand: true, cwd: 'src/userCenter', src: ['**'], dest: 'dist/userCenter' },
        ]
    }
};