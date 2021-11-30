const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');

// TODO
// const eqObjects = require('./eqObjects');
// const assertObjectsEqual = require('./assertObjectsEqual');
// const map = require('./map');
// const takeUntil = require('./takeUntil');
// const findKey = require('./findKey');


module.exports = {
  assertEqual,
  head,
  tail,
  eqArrays,
  assertArraysEqual,
  without,
  middle,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,

  // TODO
  // eqObjects,
  // assertObjectsEqual,
  // map,
  // takeUntil,
  // findKey
};