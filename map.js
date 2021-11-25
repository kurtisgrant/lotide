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

const words = ["ground", "control", "to", "major", "tom"];

// ASSIGNMENT
const map = function(arr, callback) {
  const output = [];
  for (let element of arr) {
    output.push(callback(element));
  }
  return output;
};


// TESTS
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([], word => word[0]), []);
assertArraysEqual(map(['...test'], word => word[0]), ['.']);