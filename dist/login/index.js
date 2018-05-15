define([], function () {
    'use strict';

    require.config({
        paths: {
            jquery: ['../vendor/jquery']
        }
    });

    require(['jquery'], function ($) {
        $("#back").click(function () {
            window.history.back();
        });

        $("#login").click(function () {
            var account = $("#account").val();
            var pwd = $("#pwd").val();
            if (account.length === 0 || pwd.length === 0) {
                alert('Please enter account or password!');
                return;
            }
            alert(account + " " + pwd);
        });
    });
});
