/**
 * Function to check the parity of a specified number
 * 
 * @param {Number} numberToCheck the number to check its parity
 * 
 * @returns {Boolean} Returns true if numberToCheck is even and false otherwise
 */
const isEven = (numberToCheck) => {
    // Enter code to check number partiy after this line
    function find(current) {
      if (current == numberToCheck) {
        return true;
      } else if (current > numberToCheck) {
        return false;
      } else {
        return find(current + 2);
      }
    }
    return find(0);
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
// → ??
  

module.exports = isEven;
