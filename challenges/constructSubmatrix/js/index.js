const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => {
  matrix = matrix.filter((row, idx) => rowsToDelete.indexOf(idx) === -1);
  return matrix.map(row => {
    return row.filter((item, idx) => columnsToDelete.indexOf(idx) === -1);
  })
};

module.exports = { fns: [ constructSubmatrix ] };
