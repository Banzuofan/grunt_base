'use stricts';

module.exports = {
    'dev': {
        // the server root directory
        root: 'dist',
        // the server port
        // can also be written as a function, e.g.
        // port: function() { return 8282; }
        port: 8282,
        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will
        // only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "127.0.0.1",
        cache: 10,
        showDir: true,
        autoIndex: true,
        // server default file extension
        ext: "html",
        // run in parallel with other tasks
        // true would be useful if you followed your server start with a watch task for example.
        runInBackground: true,
        // specify a logger function. By default the requests are
        // sent to stdout.
        // logFn: function (req, res, error) { 
        //     console.log(req);
        // },
        // Tell grunt task to open the browser
        openBrowser: false,
    }
}