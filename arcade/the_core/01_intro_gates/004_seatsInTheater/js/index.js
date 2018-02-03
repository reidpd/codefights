const seatsInTheater = (nCols, nRows, col, row) => {
  const rowLength = new Array(nCols).slice(col-1).length;
  return rowLength * (nRows - row);
};

module.exports = { fns: [ seatsInTheater ] };
