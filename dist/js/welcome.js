'use strict';

var welcome = function(){
    return function (guest) {
        console.log('Welcome ' + guest + '!');
        // alert('Welcome '+guest+'!');
    };
};

var sayHi = function(one){
    welcome(one);
};

module.exports.welcome = welcome;
module.exports.sayHi = sayHi;