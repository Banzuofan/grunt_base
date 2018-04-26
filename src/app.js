'use strict';

require.config({
    paths: {
        jquery: ['./jquery'],
    }
});

require(['jquery'], function ($) {
    $(document).ready(function ($) {
        alert('123');
        $('#abc').click(function () {
            alert('123');
        });
    });
});