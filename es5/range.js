'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [range].map(_regenerator2.default.mark);

function range(opts) {
  var start, step, end, i;
  return _regenerator2.default.wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          opts = typeof opts === 'number' ? { end: opts, start: 0 } : opts;

          step = typeof opts.step === 'undefined' ? 1 : opts.step;
          end = typeof opts.end === 'undefined' ? opts.start : opts.end;
          start = typeof opts.end === 'undefined' ? 0 : opts.start;

          i = start;

        case 5:
          if (!(step > 0 ? i < end : i > end)) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return i;

        case 8:
          i += step;
          _context.next = 5;
          break;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

module.exports = range;