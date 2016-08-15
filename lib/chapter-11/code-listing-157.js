'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeneratorClass = function () {
  function GeneratorClass() {
    _classCallCheck(this, GeneratorClass);
  }

  _createClass(GeneratorClass, [{
    key: 'sampleFunc',
    value: regeneratorRuntime.mark(function sampleFunc() {
      return regeneratorRuntime.wrap(function sampleFunc$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('First');
              _context.next = 3;
              return;

            case 3:
              console.log('Second');

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, sampleFunc, this);
    })
  }]);

  return GeneratorClass;
}();

var gc = new GeneratorClass();
var gen = gc.sampleFunc();
console.log(gen.next());
console.log(gen.next());