const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('should return false when given [3,6] and [1,6]', () => {
    assert.isFalse(eqArrays([3, 6], [1, 6]));
  });
  it('should return true when given [1, 5] and [1, 5]', () => {
    assert.isTrue(eqArrays([1, 5], [1, 5]));
  });
  it('should return true when given [] and []', () => {
    assert.isTrue(eqArrays([], []));
  });

});