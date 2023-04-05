/**
 * Compares two numbers and returns the smaller one
 * @param {Number} firstValue first number to be compared
 * @param {Number} secondValue second number to be compared
 * @returns {Number} returns the smaller
 */
const minimum = (firstValue, secondValue) => {
    if (firstValue < secondValue) {
        return firstValue
    } else {
        return secondValue
    }
}

module.exports = minimum
