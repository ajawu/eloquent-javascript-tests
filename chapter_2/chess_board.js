/**
 * Generates a chess board of specified size. Output should be returned not just logged
 * @param {Number} [size=8] Size of the chessboard to be generated
 * @returns {String} Returns the generated chess board as a string
 */
const chessBoardGenerator = (size = 8) => {
    let chessBoard = ''
    // Write code to genrate chess board after this line
    let characters = ['#', ' ']
    let evenCharacter = ''
    let oddCharacter = ''
    let chessBoardLine = ''
    let count = 0

    while (count < size) {
        chessBoardLine = ''
        if (count % 2 === 0) {
            ;[evenCharacter, oddCharacter] = characters
        } else {
            ;[oddCharacter, evenCharacter] = characters
        }

        for (let characterCount = 1; characterCount <= size; characterCount++) {
            chessBoardLine += characterCount % 2 === 0 ? evenCharacter : oddCharacter
        }
        chessBoard += count == size - 1 ? chessBoardLine : chessBoardLine + '\n'
        chessBoardLine = ''
        count++
    }
    return chessBoard
}

module.exports = chessBoardGenerator
