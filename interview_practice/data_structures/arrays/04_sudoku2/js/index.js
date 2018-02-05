const sudoku2 = grid => {
  const rotation = grid.map((col, i) => grid.map(row => row[i])).map(row => row.reverse());

  const bothDirections = [grid, rotation];
  return checkSquares(grid) && bothDirections.every(orientation => orientation.every(row => {
      const onlyNums = row.filter(item => !isNaN(parseInt(item)));
      return onlyNums.every(num => onlyNums.indexOf(num) === onlyNums.lastIndexOf(num))
  }));
};

const checkSquares = grid => {
  const bools = [];
  for (let i = 1; i < grid.length; i += 3) {
    for (let j = 1; j < grid[i].length; j += 3) {
      let dirs = [j-1, j+2], rows = [-1, 0, 1];
      const square = rows.map(row => grid[i + row].slice(...dirs));
      bools.push(squareIsValid(square));
    }
  }
  return bools.every(bool => bool);
}

const squareIsValid = square => {
  const allVals = square.map(strs => strs.join('')).join('').split('');
  return allVals.filter(item => item !== '.').every(val => allVals.indexOf(val) === allVals.lastIndexOf(val));
}

module.exports = { fns: [ sudoku2 ] };
