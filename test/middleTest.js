const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return [4, 7] when given [3, 4, 7, 9]', () => {
    assert.deepEqual(middle([3, 4, 7, 9]), [4, 7]);
  });
  it('should return ["Test"] when given ["Hello", "Test", "Kurtis"]', () => {
    assert.deepEqual(middle(["Hello", "Test", "Kurtis"]), ["Test"]);
  });
  it('should not change original array', () => {
    const arr = ["This", "is", "a", "test"];
    const arrCopy = arr.slice(0, arr.length);
    middle(arr);
    assert.deepEqual(arrCopy, arr);
  });

});