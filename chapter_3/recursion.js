/**
 * Function to check the parity of a specified number
 *
 * @param {Number} numberToCheck the number to check its parity
 *
 * @returns {Boolean} Returns true if numberToCheck is even and false otherwise
 */
const isEven = (numberToCheck) => {
    // Enter code to check number partiy after this line
    if (numberToCheck == 0) {
        return true
    } else if (numberToCheck == 1) {
        return false
    } else if (numberToCheck < 0) {
        return isEven(numberToCheck * -1)
    } else {
        return isEven(numberToCheck - 2)
    }
}

module.exports = isEven
