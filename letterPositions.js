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
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    let letter = sentence[i].toLowerCase();
    // If no count has been started for this letter, set it to 1
    results[letter] ? results[letter].push(i) : results[letter] = [i];
  }
  return results;
};

// TESTS
const output = letterPositions('stringing');
assertArraysEqual(output.s, [0]);
assertArraysEqual(output.r, [2]);
assertArraysEqual(output.n, [4, 7]);

