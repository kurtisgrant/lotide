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

const middle = function(arr) {
  let startIndex;
  let endIndex;

  if (arr.length % 2 === 0) {
    // If array length is even
    endIndex = arr.length / 2 + 1;
    startIndex = endIndex - 2;
  } else {
    // If array length is odd
    endIndex = Math.floor(arr.length / 2) + 1;
    startIndex = endIndex - 1;
  }
  return arr.slice(startIndex, endIndex);
};

assertArraysEqual(
  middle([2, 4, 6, 8]),
  [4, 6]
);
assertArraysEqual(
  middle([3, 6, 9]),
  [6]
);
assertArraysEqual(
  middle(['this', 'is', 'a', 'test', 'of', 'middle.js']),
  ['a', 'test']
);
