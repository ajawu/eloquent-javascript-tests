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
    let fizzBuzzOutput = '';
    // Enter code to generate fizzbuzz and numbers here
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            fizzBuzzOutput = "fizz <br>";
        } else if (i % 5 == 0) {
            fizzBuzzOutput = "buzz <br>";
        } else if (i % 3 && i % 5) {
            fizzBuzzOutput = "fizzbuzz <br>";
        } else {
            console.log(i);
        }
    }

    return fizzBuzzOutput;
}

module.exports = fizzBuzzGenerator;
