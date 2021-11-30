const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([2, 4, 6, 8, 'hello'], [2, 3, 6, 8, 'hello']);
// assertArraysEqual(['this', 'that', 'the other'], ['this', 'that', 'the other']);

describe('#assertArraysEqual', () => {

  it('should return false when given [3,6] and [1,6]', () => {
    assert.isFalse(assertArraysEqual([3, 6], [1, 6]));
  });
  it('should return true when given [1, 5] and [1, 5]', () => {
    assert.isTrue(assertArraysEqual([1, 5], [1, 5]));
  });
  it('should return true when given [] and []', () => {
    assert.isTrue(assertArraysEqual([], []));
  });

});