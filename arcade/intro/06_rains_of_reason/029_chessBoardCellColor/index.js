const chessBoardCellColor = (cell1, cell2) => {
  const board = new Array(8).fill(new Array(8)).map((row, y) => createRow(y));
  let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], items = ['1', '2', '3', '4', '5', '6', '7', '8'], indices = {};
  [cell1, cell2].forEach((cell, cellIdx) => {
    console.log(cell[0])
    let id = cellIdx === 0 ? 'a' : 'b';
    [['y', rows], ['x', items]].forEach((set, setIdx) => {
      let coord = set[0], arr = set[1], idxId = cell.split('')[setidx];
      indices[id][coord] = arr.indexOf(idxId);
    });
  });
  console.log(indices);
};

const createRow = y => {
  let arr = new Array(8).fill(0).map((item, idx) => idx % 2);
  return (y % 2 === 0) ? arr : arr.reverse();
}

module.exports = { chessBoardCellColor, createRow };
