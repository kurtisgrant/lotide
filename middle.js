const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
