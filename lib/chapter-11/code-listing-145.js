'use strict';

var _marked = [sampleFunc].map(regeneratorRuntime.mark);

function sampleFunc() {
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
  }, _marked[0], this);
}

var gen = sampleFunc();
console.log(gen.next());
console.log(gen.next());