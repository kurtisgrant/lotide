const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  [arr1, arr2].forEach(arr => {
    if (!(arr instanceof Array)) {
      return console.log("Function expects 2 arrays as inputs");
    }
  });
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      if (!Array.isArray(obj1[key])) {
        return false;
      }
      return eqArrays(obj1[key], obj2[key]);
    }
  }
  return true;
};

// ASSIGNMENT
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TESTS
assertObjectsEqual({ a: 3, b: [4, 5, 6], c: 'string' }, { a: 3, b: [4, 5, 6], c: 'string' }); // -> Assertion passed
assertObjectsEqual({ a: 3, b: [4, 5, 6], c: 'string' }, { a: 3, b: [4, 2, 6], c: 'string' }); // -> Assertion failed