
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([3, 4, 7]), 3);
assertEqual(head(["Hello", "Test", "Kurtis"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
