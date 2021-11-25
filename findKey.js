const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// ASSIGNMENT
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};

// TESTS
assertEqual(findKey({ a: 23, b: 'bob', c: 'sarah' }, key => key === 'c'), 'c');
assertEqual(findKey({ test: 23, best: 'bob', rest: 'sarah' }, key => key === 'best'), 'best');