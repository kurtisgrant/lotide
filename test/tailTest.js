const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return [4, 7] when given [3, 4, 7]', () => {
    assert.deepEqual(tail([3, 4, 7]), [4, 7]);
  });
  it('should return ["Test", "Kurtis"] when given ["Hello", "Test", "Kurtis"]', () => {
    assert.deepEqual(tail(["Hello", "Test", "Kurtis"]), ["Test", "Kurtis"]);
  });
  it('should not change original array', () => {
    const arr = ["This", "is", "a", "test"];
    const arrCopy = arr.slice(0, arr.length);
    tail(arr);
    assert.deepEqual(arrCopy, arr);
  });

});