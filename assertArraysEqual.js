
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
//   }
// };

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

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅ Assertion passed: ${arr1.toString()} === ${arr2.toString()}`);
  } else {
    console.log(`🛑 Assertion failed: ${arr1.toString()} !== ${arr2.toString()}`);
  }
};

assertArraysEqual([2, 4, 6, 8, 'hello'], [2, 3, 6, 8, 'hello']);
assertArraysEqual(['this', 'that', 'the other'], ['this', 'that', 'the other']);