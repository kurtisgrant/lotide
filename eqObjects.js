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

// ASSIGNMENT
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

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const ab2 = { a: "1", b: [3, 6, 9] };
const ba2 = { b: [3, 6, 9], a: "1" };
assertEqual(eqObjects(ab2, ba2), true);

const ab3 = { a: "1", b: [3, 6, 9] };
const ba3 = { b: [3, 5, 9], a: "1" };
assertEqual(eqObjects(ab3, ba3), false);