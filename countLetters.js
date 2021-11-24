const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// ASSIGNMENT FUNCTION
const countLetters = function(str) {
  const outputObj = {};
  for (let letter of str) {
    if (letter === ' ') continue;
    letter = letter.toLowerCase();
    // If no count has been started for this letter, set it to 1
    outputObj[letter] ? outputObj[letter]++ : outputObj[letter] = 1;
  }
  return outputObj;
};

// TESTING
const result = countLetters('a test string');
assertEqual(result.a, 1);
assertEqual(result.t, 3);
assertEqual(result.e, 1);
assertEqual(result.s, 2);
assertEqual(result.r, 1);
assertEqual(result.i, 1);
assertEqual(result.n, 1);
assertEqual(result.g, 1);