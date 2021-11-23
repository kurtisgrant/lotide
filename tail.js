
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Kurtis", "Test"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Kurtis");
assertEqual(result[1], "Test");
const words = ["Piano", "Lipchap", "Truck"];
tail(words);
assertEqual(words.length, 3);