const differentSquares = matrix => {
  const iterations = [];
  for (let rowIdx = 0; rowIdx < matrix.length-1; rowIdx++) {
    const row = matrix[rowIdx];
    const nextRow = matrix[rowIdx+1];
    for (let colIdx = 0; colIdx < row.length-1; colIdx++) {
      const squareVals = [ // creates one array of vals for easier checking later in 'squareIsUnique'
                            row[colIdx], row[colIdx+1],
                            nextRow[colIdx], nextRow[colIdx+1]
                          ];
      // if (squareIsUnique(iterations, squareVals)) {
      //   iterations.push(squareVals);
      // }
      square = squareVals.join(',');
      if (iterations.indexOf(square) === -1) {
        iterations.push(square);
      }
    }
  }
  return iterations.length;
};

const squareIsUnique = (iterations, squareVals) => {
  return iterations.every(arr => arr.some((val, idx) => val !== squareVals[idx]) );
}

module.exports = { fns: [ differentSquares, squareIsUnique ] };
