/**
 * Function that generates a function to count the number of times a given character appears in a string
 *
 * @param {String} character the character to be searched for
 *
 * @returns {Function} Function that counts number of times specified character appears in a string
 */
function countChar(character) {
    // Enter code to return character counting function
    return (stringToCheck) => {
        let characterCount = 0
        for (let index = 0; index < stringToCheck.length; index++) {
            if (stringToCheck[index] === character) {
                characterCount++
            }
        }
        return characterCount
    }
}

// Hint: Check out the closure section
let countBs = countChar('B')

module.exports = countBs
