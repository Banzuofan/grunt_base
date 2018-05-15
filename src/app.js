'use strict';

import greet from './greet';
require.config({
    paths: {
        jquery: ['../vendor/jquery'],
    }
});



require(['jquery'], function ($) {
    $(document).ready(function ($) {
        greet('hello, everyone~~');
    });

    $('#changebgColor').click(function(){
        $('body').css('background-color', 'wheat');
    });
});