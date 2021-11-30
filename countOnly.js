const countOnly = function(arr, shouldCount) {
  const outputObj = {};
  for (let element of arr) {
    if (!shouldCount[element]) {
      continue;
    }
    // If no count has been started for this element, set it to 1
    outputObj[element] ? outputObj[element]++ : outputObj[element] = 1;
  }
  return outputObj;
};

module.exports = countOnly;

