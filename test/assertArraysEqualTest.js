const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([2, 4, 6, 8, 'hello'], [2, 3, 6, 8, 'hello']);
assertArraysEqual(['this', 'that', 'the other'], ['this', 'that', 'the other']);