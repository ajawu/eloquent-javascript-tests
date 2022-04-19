/**
 * Function that generates a function to count the number of times a given character appears in a string
 * 
 * @param {String} character the character to be searched for
 * 
 * @returns {Function} Function that counts number of times specified character appears in a string
 */
    // Enter code to return character counting function
  function countBs(text) {
    return countChar(text, "B");
  }

  function countChar(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] == `${letter}`) {
        count += 1;
      }
    }
    return count;
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
// → 4

// Hint: Check out the closure section
let countBs = countChar('B');

module.exports = countBs;
