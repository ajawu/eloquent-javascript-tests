/**
 * Function to generate all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, generate "Fizz" instead of the number,
 * for numbers divisible by 5 (and not 3), generate "Buzz",
 * and for numbers divisible by 3 and 5, generate "FizzBuzz"
 * Output should be returned not just logged
 *
 * @returns {String} Returns string containing generated numbers and fizzbuzz
 */
const fizzBuzzGenerator = () => {
    let fizzBuzzOutput = ''
    // Enter code to generate fizzbuzz and numbers here
    for (let count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            fizzBuzzOutput += 'FizzBuzz' + (count !== 100 ? '\n' : '')
        } else if (count % 3 === 0) {
            fizzBuzzOutput += 'Fizz' + (count !== 100 ? '\n' : '')
        } else if (count % 5 === 0) {
            fizzBuzzOutput += 'Buzz' + (count !== 100 ? '\n' : '')
        } else {
            fizzBuzzOutput += `${count}` + (count !== 100 ? '\n' : '')
        }
    }

    return fizzBuzzOutput
}

module.exports = fizzBuzzGenerator
