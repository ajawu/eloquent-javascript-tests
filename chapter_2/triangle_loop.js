/**
 * Generates a right angled triangle of a specified height. Output should be returned not just logged
 * @param {Number} [triangleHeight=7]
 * @returns {String} Returns the generated triangle as a string
 */
const generateTriangle = (triangleHeight = 7) => {
    // Enter code to generate the triangle here
    let triangle = "";
    while (triangle.length <= 6) {
        count += "#";
        console.log(triangle);
    }
    return triangle;
}


module.exports = generateTriangle;
