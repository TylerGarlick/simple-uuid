'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var generate = function generate() {
  var lut = [];

  for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
  }

  var d0 = Math.random() * 0xffffffff | 0;
  var d1 = Math.random() * 0xffffffff | 0;
  var d2 = Math.random() * 0xffffffff | 0;
  var d3 = Math.random() * 0xffffffff | 0;

  return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
};

/**
 * Generate a UUID
 *
 * @returns Promise<string>
 */
exports.default = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return generate();

        case 2:
          return _context.abrupt('return', _context.sent);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

/**
 * Generates a UUID Synchronously
 */

var generateSync = exports.generateSync = function generateSync() {
  return generate();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZSIsImx1dCIsImkiLCJ0b1N0cmluZyIsImQwIiwiTWF0aCIsInJhbmRvbSIsImQxIiwiZDIiLCJkMyIsImdlbmVyYXRlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsTUFBTSxFQUFaOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEdBQXBCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUM1QkQsUUFBSUMsQ0FBSixJQUFTLENBQUNBLElBQUksRUFBSixHQUFTLEdBQVQsR0FBZSxFQUFoQixJQUF1QkEsQ0FBRCxDQUFJQyxRQUFKLENBQWEsRUFBYixDQUEvQjtBQUNEOztBQUVELE1BQU1DLEtBQUtDLEtBQUtDLE1BQUwsS0FBZ0IsVUFBaEIsR0FBNkIsQ0FBeEM7QUFDQSxNQUFNQyxLQUFLRixLQUFLQyxNQUFMLEtBQWdCLFVBQWhCLEdBQTZCLENBQXhDO0FBQ0EsTUFBTUUsS0FBS0gsS0FBS0MsTUFBTCxLQUFnQixVQUFoQixHQUE2QixDQUF4QztBQUNBLE1BQU1HLEtBQUtKLEtBQUtDLE1BQUwsS0FBZ0IsVUFBaEIsR0FBNkIsQ0FBeEM7O0FBRUEsU0FBT0wsSUFBSUcsS0FBSyxJQUFULElBQWlCSCxJQUFJRyxNQUFNLENBQU4sR0FBVSxJQUFkLENBQWpCLEdBQXVDSCxJQUFJRyxNQUFNLEVBQU4sR0FBVyxJQUFmLENBQXZDLEdBQThESCxJQUFJRyxNQUFNLEVBQU4sR0FBVyxJQUFmLENBQTlELEdBQXFGLEdBQXJGLEdBQ0xILElBQUlNLEtBQUssSUFBVCxDQURLLEdBQ1lOLElBQUlNLE1BQU0sQ0FBTixHQUFVLElBQWQsQ0FEWixHQUNrQyxHQURsQyxHQUN3Q04sSUFBSU0sTUFBTSxFQUFOLEdBQVcsSUFBWCxHQUFrQixJQUF0QixDQUR4QyxHQUNzRU4sSUFBSU0sTUFBTSxFQUFOLEdBQVcsSUFBZixDQUR0RSxHQUM2RixHQUQ3RixHQUVMTixJQUFJTyxLQUFLLElBQUwsR0FBWSxJQUFoQixDQUZLLEdBRW1CUCxJQUFJTyxNQUFNLENBQU4sR0FBVSxJQUFkLENBRm5CLEdBRXlDLEdBRnpDLEdBRStDUCxJQUFJTyxNQUFNLEVBQU4sR0FBVyxJQUFmLENBRi9DLEdBRXNFUCxJQUFJTyxNQUFNLEVBQU4sR0FBVyxJQUFmLENBRnRFLEdBR0xQLElBQUlRLEtBQUssSUFBVCxDQUhLLEdBR1lSLElBQUlRLE1BQU0sQ0FBTixHQUFVLElBQWQsQ0FIWixHQUdrQ1IsSUFBSVEsTUFBTSxFQUFOLEdBQVcsSUFBZixDQUhsQyxHQUd5RFIsSUFBSVEsTUFBTSxFQUFOLEdBQVcsSUFBZixDQUhoRTtBQUlELENBaEJEOztBQW1CQTs7Ozs7NERBS2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0FULFVBREE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDOztBQUlmOzs7O0FBR08sSUFBTVUsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU1WLFVBQU47QUFBQSxDQUFyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmFzdCBVVUlEIGdlbmVyYXRvciwgUkZDNDEyMiB2ZXJzaW9uIDQgY29tcGxpYW50LlxuICogQGF1dGhvciBKZWZmIFdhcmQgKGpjd2FyZC5jb20pLlxuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VcbiAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdC8yMTk2MzEzNiMyMTk2MzEzNlxuICoqL1xuY29uc3QgZ2VuZXJhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGx1dCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBsdXRbaV0gPSAoaSA8IDE2ID8gJzAnIDogJycpICsgKGkpLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIGNvbnN0IGQwID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuICBjb25zdCBkMSA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcbiAgY29uc3QgZDIgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG4gIGNvbnN0IGQzID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXG4gIHJldHVybiBsdXRbZDAgJiAweGZmXSArIGx1dFtkMCA+PiA4ICYgMHhmZl0gKyBsdXRbZDAgPj4gMTYgJiAweGZmXSArIGx1dFtkMCA+PiAyNCAmIDB4ZmZdICsgJy0nICtcbiAgICBsdXRbZDEgJiAweGZmXSArIGx1dFtkMSA+PiA4ICYgMHhmZl0gKyAnLScgKyBsdXRbZDEgPj4gMTYgJiAweDBmIHwgMHg0MF0gKyBsdXRbZDEgPj4gMjQgJiAweGZmXSArICctJyArXG4gICAgbHV0W2QyICYgMHgzZiB8IDB4ODBdICsgbHV0W2QyID4+IDggJiAweGZmXSArICctJyArIGx1dFtkMiA+PiAxNiAmIDB4ZmZdICsgbHV0W2QyID4+IDI0ICYgMHhmZl0gK1xuICAgIGx1dFtkMyAmIDB4ZmZdICsgbHV0W2QzID4+IDggJiAweGZmXSArIGx1dFtkMyA+PiAxNiAmIDB4ZmZdICsgbHV0W2QzID4+IDI0ICYgMHhmZl07XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSBVVUlEXG4gKlxuICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlKCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIFVVSUQgU3luY2hyb25vdXNseVxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTeW5jID0gKCkgPT4gZ2VuZXJhdGUoKTsiXX0=