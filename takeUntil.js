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

// ASSIGNMENT
const takeUntil = function(arr, callback) {
  const output = [];
  for (let element of arr) {
    if (callback(element)) {
      return output;
    } else {
      output.push(element);
    }
  }
  return output;
};

// TESTS
assertArraysEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(['I', 'am', 'cute', 'but', 'only', 'to', 'mom'], x => x === 'but'),
  ['I', 'am', 'cute']
);

