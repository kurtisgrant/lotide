const takeUntil = function(arr, callback) {
  const output = [];
  for (let element of arr) {
    if (callback(element)) {
      return output;
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = takeUntil;

