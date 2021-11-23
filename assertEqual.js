
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: ", actual, " === ", expected);
  } else {
    console.log("🛑 Assertion failed: ", actual, " !== ", expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(45, 46);
assertEqual(3 * 4, 12);
assertEqual("test string", "test string");