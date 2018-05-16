const differentSquares = matrix => {
  if (matrix.length < 2 || matrix.every(row => row.length < 2)) { return 0; }
  const variations = {};
  for (let firstRowIdx = 0; firstRowIdx < matrix.length-1; firstRowIdx++) {
    let secondRowIdx = firstRowIdx + 1;
    for (let colA = 0; colA < matrix[firstRowIdx].length - 1; colA++) {
      let colB = colA + 1;
      let a = matrix[firstRowIdx][colA], b = matrix[firstRowIdx][colB],
          c = matrix[secondRowIdx][colA], d = matrix[secondRowIdx][colB];
      if (a && b && c && d) {
        // let square = [[a,b],[c,d]];
        // if (!variations.some((storedSquare, i) => {
        //   return storedSquare.every((row, rowIdx) => {
        //     return row.every((col, colIdx) => {
        //       return storedSquare[rowIdx][colIdx] === square[rowIdx][colIdx];
        //     })
        //   })
        // })) {
        //   variations.push(square);
        // }
        let square = "" + a + b + c + d;
        if (variations.indexOf(square) === -1) { variations.push(square) }
      }
    }
  }
  return variations.length;
};

module.exports = { fns: [ differentSquares ] };
