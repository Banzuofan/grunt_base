define(['./greet'], function (_greet) {
    'use strict';

    var _greet2 = _interopRequireDefault(_greet);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    require.config({
        paths: {
            jquery: ['../vendor/jquery']
        }
    });

    require(['jquery'], function ($) {
        $(document).ready(function ($) {
            (0, _greet2.default)('hello, everyone~~');
        });

        $('#changebgColor').click(function () {
            $('body').css('background-color', 'wheat');
        });
    });
});
