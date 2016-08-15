'use strict';

var target = function target() {
  return 'I am the target';
};
var handler = {
  apply: function apply(receiver) {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
p() === 'I am the proxy';