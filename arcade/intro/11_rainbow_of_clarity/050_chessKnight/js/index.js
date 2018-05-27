const createBoard = require('../../09_dark_wilderness/042_bishopAndPawn').fns[1];

const chessKnight = /*string*/ cell => { // str of 2 letters: coords for standard chess notation
  const board = createBoard();
  const coords = getCoords(cell, board);
  const twoStepIncrements = [-2, 2];
  const oneStepIncrements = [-1, 1];
  const yX = ['y', 'x'];
  let moves = 0;
  twoStepIncrements.forEach((doubleStep, i) => {
    oneStepIncrements.forEach((singleStep, j) => {
      yX.forEach((coordName, coordIdx) => {
        let doubleStepper = coordName, singleStepper = yX.slice().filter(c => c !== coordName)[0];
        let stepCoords = coords => {
          let clone = Object.assign({}, coords);
          clone[doubleStepper] += doubleStep;
          clone[singleStepper] += singleStep;
          return clone;
        };
        let steppedCoords = stepCoords(coords);
        if (board[steppedCoords.y] && board[steppedCoords.y][steppedCoords.x]) {
          moves++;
        }
      })
    })
  })
  return moves;
};

const getCoords = (cell, board) => {
  let result;
  board.forEach((row, y) => row.forEach((col, x) => {
    if (col === cell) { result = { y, x } };
  }))
  return result;
}

module.exports = { fns: [ chessKnight, getCoords ] };
