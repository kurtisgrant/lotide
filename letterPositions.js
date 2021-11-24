const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    let letter = sentence[i].toLowerCase();
    // If no count has been started for this letter, set it to 1
    results[letter] ? results[letter].push(i) : results[letter] = [i];
  }
  return results;
};

console.log(letterPositions(`const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};
`));