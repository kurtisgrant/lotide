const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
