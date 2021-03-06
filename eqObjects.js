const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      if (!Array.isArray(obj1[key])) {
        return false;
      }
      return eqArrays(obj1[key], obj2[key]);
    }
  }
  return true;
};

module.exports = eqObjects;
