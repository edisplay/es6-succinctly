'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _counter = new WeakMap();
var _action = new WeakMap();

var Countdown = function () {
  function Countdown(counter, action) {
    _classCallCheck(this, Countdown);

    _counter.set(this, counter);
    _action.set(this, action);
  }

  _createClass(Countdown, [{
    key: 'dec',
    value: function dec() {
      var counter = _counter.get(this);
      if (counter < 1) return;
      counter--;
      _counter.set(this, counter);
      if (counter === 0) {
        _action.get(this)();
      }
    }
  }]);

  return Countdown;
}();

var c = new Countdown(2, function () {
  return console.log('DONE');
});
c.dec();
c.dec();