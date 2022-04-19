/**
 * Compares two numbers and returns the smaller one
 * @param {Number} firstValue first number to be compared
 * @param {Number} secondValue second number to be compared
 * @returns {Number} returns the smaller 
 */
const minimum = (firstValue, secondValue) => {
   // Enter code to find minimum number
    if ((firstValue - secondValue) < 0)
      return firstValue;
    else
      return secondValue;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

module.exports = minimum;
