const head = require('../head');
const assert = require('chai').assert;

describe('#head', () => {

  it('should return 3 when given [3, 4, 7]', () => {
    assert.strictEqual(head([3, 4, 7]), 3);
  });
  it('should return "Hello" when given ["Hello", "Test", "Kurtis"]', () => {
    assert.strictEqual(head(["Hello", "Test", "Kurtis"]), "Hello");
  });
  it('should return undefined when given []', () => {
    assert.strictEqual(head([]), undefined);
  });
  it('should return 5 when given [5]', () => {
    assert.strictEqual(head([5]), 5);
  });

});