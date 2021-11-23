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

const without = function(arr, toRemove) {
  const arrWithout = [];
  for (let el of arr) {
    let keeping = true;
    for (let rm of toRemove) {
      if (el === rm) {
        keeping = false;
        break;
      }
    }
    if (keeping) {
      arrWithout.push(el);
    }
  }
  return arrWithout;
};

assertArraysEqual(without([1, 3, "5", "test"], [3]), [1, "5", "test"]);
assertArraysEqual(without(['this', 'is', 'a', 'test'], ['the']), ['this', 'is', 'a', 'test']);
assertArraysEqual(without(['this', 'is', 'a', 'test'], ['test']), ['this', 'is', 'a']);
const untouchableArray = ['pizza', 'tacos'];
console.log(untouchableArray, 'without tacos = ', without(untouchableArray, ['tacos']));
assertArraysEqual(untouchableArray, ['pizza', 'tacos']);