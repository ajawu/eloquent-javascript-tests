/**
 * Generates a chess board of specified size. Output should be returned not just logged
 * @param {Number} [size=8] Size of the chessboard to be generated
 * @returns {String} Returns the generated chess board as a string
 */
const chessBoardGenerator = (size=8) => {
    // Write code to genrate chess board after this line
    let size = 8;
    let chessBoard = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((j + i) % 2 == 0) {
                chessBoard += " ";
            } else {
                chessBoard += "#"
            }
        }
        chessBoard += "\n";
    }

    return chessBoard;
}


module.exports = chessBoardGenerator;