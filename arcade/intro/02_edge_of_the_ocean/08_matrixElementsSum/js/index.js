const matrixElementsSum = matrix => {
  let badColumns = [], result = 0;
  matrix.forEach((arr, row) => {
      arr.forEach((item, col) => {
          if (item === 0) { badColumns.push(col) }
          if (badColumns.indexOf(col) >= 0) {
              matrix[row][col] = 0;
          }
          result += matrix[row][col]
      })
  });
  return result;
}

module.exports = { matrixElementsSum }
