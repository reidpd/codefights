const minesweeper = matrix => {
  let map = [];
  matrix.forEach((row, y) => {
    map.push([]);
    row.forEach((item, x) => map[y].push(calculateSquare(matrix, y, x)));
  });
  return map;
}

const calculateSquare = (matrix, y, x) => {
    let total = matrix[y][x] ? -1 : 0;
    [-1,0,1].forEach(foo => {
        if (matrix[y+foo]) {
            [-1,0,1].forEach(bar => {
                if (matrix[y+foo][x+bar]) { total +=  1; }
            });
        }
    });
    return total;
}

module.exports = { minesweeper, calculateSquare }
