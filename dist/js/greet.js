define(['exports'], function (exports) {
  'use strict';

  // export default function greet(name) {
  //     alert(name);
  // }

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var greet = function greet(name) {
    return alert(name);
  };
  exports.default = greet;
});
