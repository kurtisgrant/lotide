const countLetters = function(str) {
  const outputObj = {};
  for (let letter of str) {
    if (letter === ' ') continue;
    letter = letter.toLowerCase();
    // If no count has been started for this letter, set it to 1
    outputObj[letter] ? outputObj[letter]++ : outputObj[letter] = 1;
  }
  return outputObj;
};

module.exports = countLetters;