const without = function(arr, toRemove) {
  const arrWithout = [];
  for (let el of arr) {
    let keeping = true;
    for (let rm of toRemove) {
      if (el === rm) {
        keeping = false;
        break;
      }
    }
    if (keeping) {
      arrWithout.push(el);
    }
  }
  return arrWithout;
};

module.exports = without;