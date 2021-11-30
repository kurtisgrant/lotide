const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(
  middle([2, 4, 6, 8]), // -> [4, 6]
  [4, 6]
);
assertArraysEqual(
  middle([3, 6, 9]), // -> [6]
  [6]
);
assertArraysEqual(
  middle(['this', 'is', 'a', 'test', 'of', 'middle.js']), // -> ['a', 'test']
  ['a', 'test']
);