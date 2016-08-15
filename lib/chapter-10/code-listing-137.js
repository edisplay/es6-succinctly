"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
  var pre = 0,
      cur = 1;
  return {
    next: function next() {
      var _ref = [cur, pre + cur];
      pre = _ref[0];
      cur = _ref[1];

      return { done: false, value: cur };
    }
  };
});