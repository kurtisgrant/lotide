const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Kurtis", "Test"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Kurtis");
assertEqual(result[1], "Test");
const words = ["Piano", "Lipchap", "Truck"];
tail(words);
assertEqual(words.length, 3);