'use strict';

require.config({
    paths: {
        jquery: ['./vendor/jquery'],
    }
});

require(['jquery'], function ($) {

    $('#changebgColor').click(function () {
        $('body').css('background-color', 'wheat');
    });
});