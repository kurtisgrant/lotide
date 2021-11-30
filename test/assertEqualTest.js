const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {

  it('should return false when given "Lighthouse Labs" and "Bootcamp"', () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it('should return true when given 1 and 1', () => {
    assert.isTrue(assertEqual(1, 1));
  });
  it('should return false when given 45 & 46', () => {
    assert.isFalse(assertEqual(45, 46));
  });
  it('should return true when given "test string" and "test string"', () => {
    assert.isTrue(assertEqual('test string', 'test string'));
  });

});