const map = function(arr, callback) {
  const output = [];
  for (let element of arr) {
    output.push(callback(element));
  }
  return output;
};

module.exports = map;

