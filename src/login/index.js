
require.config({
    paths: {
        jquery: ['../vendor/jquery'],
    }
});

require(['jquery'], function ($) {
    $("#back").click(function(){
        window.history.back();
    })

    $("#login").click(function () {
        let account = $("#account").val();
        let pwd = $("#pwd").val();
        if(account.length===0 || pwd.length===0){
            alert('Please enter account or password!');
            return;
        }
        alert(account + " " + pwd);
    })
});