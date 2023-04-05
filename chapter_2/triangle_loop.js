/**
 * Generates a right angled triangle of a specified height. Output should be returned not just logged
 * @param {Number} [triangleHeight=7]
 * @returns {String} Returns the generated triangle as a string
 */
const generateTriangle = (triangleHeight = 7) => {
    let triangle = ''
    // Enter code to generate the triangle here
    for (let count = 1; count <= triangleHeight; count++) {
        if (count === triangleHeight && triangleHeight != 1) {
            triangle += '#'.repeat(count)
            continue
        }
        triangle += '#'.repeat(count) + '\n'
    }
    return triangle
}

module.exports = generateTriangle
