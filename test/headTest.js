const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([3, 4, 7]), 3);
assertEqual(head(["Hello", "Test", "Kurtis"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
